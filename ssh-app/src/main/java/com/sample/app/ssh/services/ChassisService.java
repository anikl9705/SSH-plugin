/* Copyright (c) 2018 VMware, Inc. All rights reserved. */

package com.sample.app.ssh.services;

import java.util.List;

import com.sample.app.ssh.model.Chassis;
import com.sample.app.ssh.model.Host;

/**
 * Interface used to perform operations on a chassis object and retrieve data for chassis objects.
 */
public interface ChassisService {
   /**
    * Retrieves a chassis object by a given chassis id.
    *
    * @param chassisId  the id of a chassis object.
    * @return  the chassis object.
    */
   Chassis getChassisById(String chassisId);

   /**
    * Retrieves all existing chassis objects.
    * @return  a list of chassis objects.
    */
   List<Chassis> getAllChassis();

   /**
    * Creates a new chassis object.
    *
    * @param chassis chassis data used to create a new chassis object.
    * @return  the id of the newly created chassis object
    *          or null if the creation failed.
    */
   String create(Chassis chassis);

   /**
    * Updates a chassis object.
    *
    * @param chassis    chassis data used to update a chassis object with.
    * @return  true if the chassis has been successfully updated
    *          or false otherwise.
    */
   boolean update(Chassis chassis);

   /**
    * Deletes a chassis object by a given chassis id.
    *
    * @param chassisId   the id of a chassis object.
    */
   void delete(String chassisId);

   /**
    * Creates relation between the Chassis object and the provided list of
    * connected Host object IDs
    *
    * @param chassisId       the ID of the Chassis
    * @param relatedHostsIds a list of connected Host objects IDs to relate to
    *                        the given Chassis object
    */
   void setRelatedHosts(String chassisId, List<String> relatedHostsIds);

   /**
    * Updates the Chassis-Host relation
    *
    * @param host the Host object containing the updated lis of related Chassis
    */
   void updateHostRelation(Host host);

   /**
    * Retrieves all chassis related to the given Host object
    *
    * @param hostId the ID of the Host object
    * @return list of related Chassis objects
    */
   List<Chassis> getRelatedChassis(String hostId);
}
