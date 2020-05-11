/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */
package com.sample.app.ssh.vim25.ssl;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import javax.net.ssl.X509TrustManager;
import javax.xml.bind.DatatypeConverter;

/**
 * Implementation of {@link X509TrustManager} that checks certificates against a known
 * thumbprint (SHA-1 hash)
 */
public class ThumbprintTrustManager implements X509TrustManager {
   // SHA-3 implementation is not supported for JDK8's MessageDigest
   private static final String[] ALGORITHM_NAMES = { "SHA-1", "SHA-224",
         "SHA-256", "SHA-384", "SHA-512" };
   private final String expectedThumbprint;

   /**
    * Constructor
    *
    * @param expectedThumbprint SHA-1, or SHA-2 certificate thumbprint we
    *                           expect to receive from the host
    */
   public ThumbprintTrustManager(final String expectedThumbprint) {
      this.expectedThumbprint = expectedThumbprint;
   }

   @Override
   public void checkClientTrusted(final X509Certificate[] arg0,
         final String arg1) {
      throw new UnsupportedOperationException();
   }

   @Override
   public void checkServerTrusted(final X509Certificate[] chain, final String authType)
         throws CertificateException {
      if (expectedThumbprint == null) {
         // We do not have a thumbprint for the host so we allow
         // connection w/o verification.
         return;
      }
      for (final String algorithmName : ALGORITHM_NAMES) {
         // Extract thumbprint from certificate
         final MessageDigest md;
         try {
            md = MessageDigest.getInstance(algorithmName);
         } catch (final NoSuchAlgorithmException e) {
            throw new AssertionError(e);
         }

         md.update(chain[0].getEncoded());
         final String certThumb = DatatypeConverter.printHexBinary(md.digest())
               .toLowerCase();

         // Check match
         if (expectedThumbprint.equalsIgnoreCase(certThumb)) {
            return;
         }
      }

      throw new RuntimeException(
            "Host certificate thumbprint did not match expected value.");
   }

   @Override
   public X509Certificate[] getAcceptedIssuers() {
      return null;
   }
}
