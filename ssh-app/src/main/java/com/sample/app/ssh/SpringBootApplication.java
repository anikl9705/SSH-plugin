/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
package com.sample.app.ssh;

import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.springframework.boot.SpringApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

import javax.net.ssl.HttpsURLConnection;

@Configuration
@ImportResource("classpath:spring-context.xml")
@org.springframework.boot.autoconfigure.SpringBootApplication
public class SpringBootApplication {

   public static void main(String[] args) {
      HttpsURLConnection.setDefaultHostnameVerifier(NoopHostnameVerifier.INSTANCE);
      SpringApplication.run(SpringBootApplication.class, args);
   }
}

