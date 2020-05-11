/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */
package com.sample.app.ssh.gateway;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Reply from the API-GW containing a clone session ticket
 */
public class CloneSessionReply {
   /**
    * The value of the clone session ticket, returned from the API-GW
    */
   @JsonProperty("session_clone_ticket")
   public String sessionCloneTicket;
}
