/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
package com.sample.app.ssh.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import com.sample.app.ssh.model.Host;
import com.sample.app.ssh.vim25.services.VimObjectService;
import org.springframework.util.CollectionUtils;

/**
 * Service used to retrieve information about HostSystem vsphere objects
 */
public class HostServiceImpl implements HostService {

   private final VimObjectService vimObjectService;
   private final ChassisService chassisService;

   public HostServiceImpl(final VimObjectService vimObjectService,
         final ChassisService chassisService) {
      this.vimObjectService = vimObjectService;
      this.chassisService = chassisService;
   }

   /**
    * Returns all connected hosts to the vCenter Server.
    */
   @Override
   public List<Host> retrieveConnectedHosts() {
      final List<Host> retrievedHosts = vimObjectService.retrieveHosts();
      return filterConnectedHosts(retrievedHosts);
   }

   /**
    * Retrieves the connected Host objects related to the given Chassis.
    *
    * @return related Host objects
    */
   @Override
   public List<Host> retrieveConnectedHosts(final String chassisId) {
      final List<String> relatedHostsIds = chassisService
            .getChassisById(chassisId).relatedHostsIds;
      if (CollectionUtils.isEmpty(relatedHostsIds)) {
         return Collections.emptyList();
      }
      final List<Host> connectedHosts = retrieveConnectedHosts();
      final List<Host> relatedHosts = connectedHosts.stream()
            .filter(host -> relatedHostsIds.contains(host.id))
            .collect(Collectors.toList());
      return relatedHosts;
   }

   /**
    * @return a list of all connected hosts
    */
   private List<Host> filterConnectedHosts(final List<Host> hosts) {
      final List<Host> result = new ArrayList<>();
      final String expectedState = "connected";
      for (final Host host : hosts) {
         if (expectedState.equals(host.state)) {
            // capitalize the first letter of the host state.
            host.state = Character
                  .toUpperCase(host.state.charAt(0)) + host.state.substring(1);
            result.add(host);
         }
      }

      return result;
   }
}
