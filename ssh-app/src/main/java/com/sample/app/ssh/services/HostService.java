/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
package com.sample.app.ssh.services;

import java.util.List;

import com.sample.app.ssh.model.Host;

/**
 * Interface used to retrieve information about related hosts.
 */
public interface HostService {

   /**
    * Retrieves the connected hosts
    *
    * @return connected hosts
    */
   List<Host> retrieveConnectedHosts();

   /**
    * Retrieves the connected Host object related to the given Chassis
    *
    * @return related Host objects
    */
   List<Host> retrieveConnectedHosts(String chassisId);
}
