/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */
package com.sample.app.ssh.gateway;

import java.net.URISyntaxException;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.X509Certificate;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSessionContext;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.servlet.http.HttpServletRequest;
import javax.xml.ws.BindingProvider;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import com.google.common.cache.RemovalListener;
import com.google.common.cache.RemovalNotification;
import com.sample.app.ssh.configuration.Configuration;
import com.sample.app.ssh.vim25.ssl.ThumbprintTrustManager;
import com.vmware.vim25.InvalidLoginFaultMsg;
import com.vmware.vim25.ManagedObjectReference;
import com.vmware.vim25.RuntimeFaultFaultMsg;
import com.vmware.vim25.UserSession;
import com.vmware.vim25.VimPortType;
import com.vmware.vim25.VimService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLContexts;
import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.util.UriComponentsBuilder;

/**
 * <p>
 * Implementation that uses the clone session REST API to acquire a new session from VPXD
 * </p>
 * <p>
 * To acquire a cloned session the {@link SessionServiceImpl} follows these steps:
 * <ul>
 * <li>1. Contact the API-GW to acquire a clone ticket for the VPX session</li>
 * <li>2. Using the clone ticket clone the session</li>
 * <li>3. Cache the stored session for a certain amount of time</li>
 * </ul>
 * </p>
 * <p>
 * Maintains a {@link LoadingCache} with all the {@link UserSession}s that have already
 * been cloned, based on a combination of vCenter Server GUID and session ID. The session
 * lazy loads data per each vCenter Server and per each session. When a value from the
 * cache is removed the manager attempts to terminate the associated cloned session
 * </p>
 */
public class SessionServiceImpl implements SessionService {
   private static final Log logger = LogFactory.getLog(
         SessionServiceImpl.class);
   private static final VimService vimService = new VimService();
   // The first call to VimService::getVimPort() is taking a lot of time.
   // This dummy initialization is done once on deploy time, in order to avoid delay when
   // a user is interacting with the plugin.
   private static final VimPortType vimPort = vimService.getVimPort();

   private static final String API_SESSION_KEY = "vmware-api-session-id";
   private static final String API_GATEWAY_URL = "vmware-api-gateway-url";
   private static final String SSL_SOCKET_FACTORY = "com.sun.xml.internal.ws.transport.https.client.SSLSocketFactory";

   private static final String CLONE_TICKET_PATH = "/vcenter/session/clone-ticket";
   private static final String VCENTER_GUID_PROP = "vc_guid";

   private final ManagedObjectReference sessionManager;
   private final Configuration configurationService;

   public SessionServiceImpl(final Configuration configurationService) {
      this.configurationService = configurationService;
      sessionManager = new ManagedObjectReference();
      sessionManager.setValue("SessionManager");
      sessionManager.setType("SessionManager");
   }

   private final RemovalListener<VcenterInfo, VimPortType> removalListener = new SessionRemovalListener();
   private final CacheLoader<VcenterInfo, VimPortType> loader = new SessionCacheLoader();
   private final LoadingCache<VcenterInfo, VimPortType> sessionCache = CacheBuilder
         .newBuilder().maximumSize(100).expireAfterAccess(10, TimeUnit.MINUTES)
         .removalListener(removalListener).build(loader);
   private final ObjectMapper objectMapper = new ObjectMapper();

   private RestTemplate buildRestTemplate() {
      final SSLContext sslContext;
      try {
         final TrustStrategy acceptingTrustStrategy = new TrustStrategy() {
            @Override
            public boolean isTrusted(X509Certificate[] x509Certificates,
                  String s) {
               return true;
            }
         };
         sslContext = SSLContexts.custom()
               .loadTrustMaterial(null, acceptingTrustStrategy).build();
      } catch (KeyManagementException | NoSuchAlgorithmException | KeyStoreException e) {
         throw new RuntimeException("Failed to build an SSL context", e);
      }

      final SSLConnectionSocketFactory csf = new SSLConnectionSocketFactory(
            sslContext, NoopHostnameVerifier.INSTANCE);
      final CloseableHttpClient httpClient = HttpClients.custom()
            .setSSLSocketFactory(csf).build();

      final HttpComponentsClientHttpRequestFactory requestFactory =
            new HttpComponentsClientHttpRequestFactory();
      requestFactory.setHttpClient(httpClient);

      final RestTemplate restTemplate = new RestTemplate(requestFactory);
      return restTemplate;
   }

   /**
    * Returns a new {@link HttpEntity} and sets the correct headers
    * for the specific vCenter Server.
    *
    * @param vcenterGuid the vCenter Server Guid.
    */
   private HttpEntity<?> getHttpRequestEntity(final String vcenterGuid) {
      final HttpHeaders headers = new HttpHeaders();
      headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
      headers.setContentType(MediaType.APPLICATION_JSON);
      final ObjectNode node = objectMapper.createObjectNode();
      node.put(VCENTER_GUID_PROP, vcenterGuid);
      return getHttpRequestEntity(node, headers);
   }

   /**
    * Returns a new {@link HttpEntity} with the specified body and headers
    * plus an additional header for the plugin session identifier.
    *
    * @param body    the request body.
    * @param headers the headers to add to the http request.
    */
   private <T> HttpEntity<T> getHttpRequestEntity(final T body,
         final HttpHeaders headers) {
      final String pluginSessionGuid = extractRequestHeader(API_SESSION_KEY);
      final HttpHeaders actualHeaders = new HttpHeaders();
      if (headers != null) {
         for (final Map.Entry<String, List<String>> headerEntry : headers
               .entrySet()) {
            final List<String> headerValues = headerEntry.getValue();
            for (final String headerVal : headerValues) {
               actualHeaders.add(headerEntry.getKey(), headerVal);
            }
         }
      }
      actualHeaders.set(API_SESSION_KEY, pluginSessionGuid);
      return new HttpEntity<>(body, actualHeaders);
   }

   public VimPortType getVimPort(final String vcenterGuid) {
      final String pluginSession = extractRequestHeader(API_SESSION_KEY);
      final VcenterInfo vcenterInfo = new VcenterInfo(pluginSession,
            vcenterGuid);
      try {
         return this.sessionCache.get(vcenterInfo);
      } catch (final ExecutionException e) {
         throw new RuntimeException(
               "Unable to get session or fetch cached value", e);
      }
   }

   /**
    * "Loads" the session information by first extracting a clone ticket from
    * the vCenter Server and then using {@link VimPortType} clone the ticket
    */
   public class SessionCacheLoader
         extends CacheLoader<VcenterInfo, VimPortType> {
      @Override
      public VimPortType load(final VcenterInfo key)
            throws ExecutionException, URISyntaxException {
         // Step 1. Acquire a clone ticket from the API-GW of the calling server
         final RestTemplate restTemplate = buildRestTemplate();
         final String uri = UriComponentsBuilder
               .fromHttpUrl(extractRequestHeader(API_GATEWAY_URL))
               .path(CLONE_TICKET_PATH).toUriString();

         final CloneSessionReply cloneTicket = restTemplate
               .exchange(uri, HttpMethod.POST, getHttpRequestEntity(key.vcGuid),
                     CloneSessionReply.class).getBody();

         final VimPortType vimPort = vimService.getVimPort();
         final Map<String, Object> context = ((BindingProvider) vimPort)
               .getRequestContext();
         context.put(BindingProvider.ENDPOINT_ADDRESS_PROPERTY,
               configurationService.getVcenterApiEndpoint().toString());
         context.put(BindingProvider.SESSION_MAINTAIN_PROPERTY, true);
         try {
            context.put(SSL_SOCKET_FACTORY, getSSLSocketFactory());
         } catch (final NoSuchAlgorithmException | KeyManagementException e) {
            throw new ExecutionException(e);
         }
         // Step 2. Contact the SessionManager in VPX (the one which the plugin
         // server is registered against) to build up a session using the
         // acquired clone ticket.
         // The calling server may differ from the one the plugin server
         // is registered against (e.g. in HLM mode). That is why we use
         // the configured vcenter.address to build the sdk's URL, instead of
         // relying on the sdk's URL provided by the calling vCenter Server.
         try {
            vimPort
                  .cloneSession(sessionManager, cloneTicket.sessionCloneTicket);
         } catch (final InvalidLoginFaultMsg | RuntimeFaultFaultMsg invalidLoginFaultMsg) {
            throw new ExecutionException(invalidLoginFaultMsg);
         }

         return vimPort;
      }
   }

   /**
    * {@link RemovalListener} that terminates the session on a dedicated {@link VimPortType}
    */
   public class SessionRemovalListener
         implements RemovalListener<VcenterInfo, VimPortType> {
      @Override
      public void onRemoval(
            RemovalNotification<VcenterInfo, VimPortType> notification) {
         try {
            notification.getValue().logout(sessionManager);
         } catch (RuntimeFaultFaultMsg runtimeFaultFaultMsg) {
            logger.info("The session is already destroyed.");
         }
      }
   }

   private String extractRequestHeader(String key) {
      HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
            .currentRequestAttributes()).getRequest();

      return request.getHeader(key);
   }

   /**
    * Creates a socket factory for TLS/SSL connection.
    * It is used to validate the identity of the plugin server against the
    * vCenter APIs.
    */
   private SSLSocketFactory getSSLSocketFactory()
         throws NoSuchAlgorithmException, KeyManagementException {
      TrustManager[] trustManagers = new TrustManager[1];
      TrustManager tm = new ThumbprintTrustManager(
            configurationService.getVcenterSslThumbprint());
      trustManagers[0] = tm;

      SSLContext sslContext = SSLContext.getInstance("TLSv1.2");

      SSLSessionContext sslsc = sslContext.getServerSessionContext();
      sslsc.setSessionTimeout(0);
      sslContext.init(null, trustManagers, null);

      return sslContext.getSocketFactory();
   }

   public static class VcenterInfo {
      private final String pluginSession;
      private final String vcGuid;

      VcenterInfo(final String pluginSession, final String vcGuid) {
         if (pluginSession == null || vcGuid == null) {
            throw new AssertionError("Invalid values provided");
         }

         this.pluginSession = pluginSession;
         this.vcGuid = vcGuid;
      }

      @Override
      public boolean equals(Object other) {
         if (other instanceof VcenterInfo) {
            VcenterInfo otherInfo = (VcenterInfo) other;
            if (this.pluginSession.equals(otherInfo.pluginSession)
                  && this.vcGuid.equals(otherInfo.vcGuid)) {
               return true;
            }
         }
         return false;
      }

      @Override
      public int hashCode() {
         return this.pluginSession.hashCode();
      }
   }
}
