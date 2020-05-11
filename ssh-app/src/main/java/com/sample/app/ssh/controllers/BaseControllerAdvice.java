/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
package com.sample.app.ssh.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.HashMap;
import java.util.Map;

/**
 * Class for generic exception handling
 */
@ControllerAdvice
public class BaseControllerAdvice {

   /**
    * Generic handling of internal exceptions.
    * Sends a 500 server error response along with a json body with messages
    *
    * @param ex The exception that was thrown.
    * @return a response with the exception message, the cause and a stackTrace
    */
   @ExceptionHandler(Exception.class)
   public ResponseEntity<Map<String, String>> handleException(
         final Exception ex) {
      final Map<String, String> errorMap = new HashMap<>();
      errorMap.put("message", ex.getMessage());
      if (ex.getCause() != null) {
         errorMap.put("cause", ex.getCause().getMessage());
      }
      final StringWriter sw = new StringWriter();
      final PrintWriter pw = new PrintWriter(sw);
      ex.printStackTrace(pw);
      errorMap.put("stackTrace", sw.toString());

      return new ResponseEntity<>(errorMap, HttpStatus.INTERNAL_SERVER_ERROR);
   }
}
