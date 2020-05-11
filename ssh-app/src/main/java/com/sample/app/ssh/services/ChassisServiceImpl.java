/* Copyright (c) 2018 VMware, Inc. All rights reserved. */

package com.sample.app.ssh.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import com.sample.app.ssh.model.Chassis;
import com.sample.app.ssh.model.Host;
import com.sample.app.ssh.store.ChassisStore;
import org.apache.commons.lang3.Validate;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.util.CollectionUtils;

/**
 * Implementation of ChassisService.
 */
public class ChassisServiceImpl implements ChassisService {
   // Log messages
   private static final String CHASSIS_OBJECT_EXISTS_LOG_MSG =
         "Chassis object with the name '%s' already exists.";
   private static final String CHASSIS_OBJECT_DOES_NOT_EXIST_LOG_MSG =
         "Chassis object with the ID '%s' does not exist.";
   private static final String CHASSIS_OBJECT_CREATED_LOG_MSG =
         "Chassis object with the ID '%s' was successfully created: '%s'.";

   private static final Log logger = LogFactory.getLog(
         ChassisServiceImpl.class);

   private final ChassisStore inMemoryChassisStore;

   public ChassisServiceImpl(final ChassisStore inMemoryChassisStore) {
      this.inMemoryChassisStore = inMemoryChassisStore;
   }

   /**
    * Retrieves a chassis data by a given chassis id.
    *
    * @param chassisId  the id of a chassis object.
    * @return  the chassis object.
    */
   @Override
   public Chassis getChassisById(final String chassisId) {
      final Chassis chassis = inMemoryChassisStore.getObjectById(chassisId);
      return Validate.notNull(chassis, CHASSIS_OBJECT_DOES_NOT_EXIST_LOG_MSG);
   }

   /**
    * Retrieves all existing chassis objects.
    * @return  a list of chassis objects.
    */
   @Override
   public List<Chassis> getAllChassis() {
      return inMemoryChassisStore.getObjects();
   }

   /**
    * Creates a new chassis object.
    *
    * @param chassis chassis data used to create a new chassis object.
    * @return  the id of the newly created chassis object
    *          or null if the creation failed.
    */
   @Override
   public String create(final Chassis chassis) {
      Validate.notNull(chassis);

      final Chassis newChassis = inMemoryChassisStore.create(chassis);
      if (newChassis == null) {
         logger.info(String.format(CHASSIS_OBJECT_EXISTS_LOG_MSG, chassis.name));
         return null;
      }

      logger.info(
            String.format(CHASSIS_OBJECT_CREATED_LOG_MSG, newChassis.id, newChassis.toString()));
      return newChassis.id;
   }

   /**
    * Updates a chassis object.
    *
    * @param chassis    chassis data used to update a chassis object with.
    * @return  true if the chassis has been successfully updated
    *          or false otherwise.
    */
   @Override
   public boolean update(final Chassis chassis) {
      Validate.notNull(chassis);
      return inMemoryChassisStore.update(chassis);
   }

   /**
    * Deletes a chassis object by a given chassis id.
    *
    * @param chassisId  the id of a chassis object.
    * @return  true if the chassis has been successfully deleted
    *          or false otherwise.
    */
   @Override
   public void delete(final String chassisId) {
      final Chassis chassis = inMemoryChassisStore.delete(chassisId);
      Validate.notNull(chassis);
   }

   /**
    * Creates relation between the Chassis object and the provided list of connected hosts
    *
    * @param chassisId       the ID of the Chassis
    * @param relatedHostsIds a list of connected Host object IDs to relate to
    *                        the given Chassis object
    */
   @Override
   public void setRelatedHosts(String chassisId, List<String> relatedHostsIds) {
      getChassisById(chassisId).relatedHostsIds = relatedHostsIds;
   }

   @Override
   public void updateHostRelation(Host host) {
      final String hostId = host.id;
      final List<String> updatedChassisIds = host.relatedChassisIds;
      final List<Chassis> allChassis = getAllChassis();
      for (final Chassis currentChassis : allChassis) {
         final String currentChassisId = currentChassis.id;
         final List<String> currentChassisHostIds = currentChassis.relatedHostsIds;
         // Add to relation
         if ((CollectionUtils.isEmpty(currentChassisHostIds)
               || !currentChassisHostIds.contains(hostId)) && updatedChassisIds
               .contains(currentChassisId)) {
            addRelatedHost(currentChassisId, hostId);
         // Remove from relation
         } else if (!CollectionUtils.isEmpty(currentChassisHostIds)
               && currentChassisHostIds.contains(hostId) && !updatedChassisIds
               .contains(currentChassisId)) {
            removeRelatedHost(currentChassisId, hostId);
         }
      }
   }

   @Override
   public List<Chassis> getRelatedChassis(String hostId) {
      final List<Chassis> allChassis = getAllChassis();
      if (CollectionUtils.isEmpty(allChassis)) {
         return Collections.emptyList();
      }
      return allChassis.stream().filter(
            chassis -> !CollectionUtils.isEmpty(chassis.relatedHostsIds)
                  && chassis.relatedHostsIds.contains(hostId))
            .collect(Collectors.toList());
   }

   private void addRelatedHost(String chassisId, String hostId) {
      if (CollectionUtils.isEmpty(getChassisById(chassisId).relatedHostsIds)) {
         getChassisById(chassisId).relatedHostsIds = new ArrayList<>();
      }
      getChassisById(chassisId).relatedHostsIds.add(hostId);
   }

   private void removeRelatedHost(String chassisId, String hostId) {
      getChassisById(chassisId).relatedHostsIds.remove(hostId);
   }
}
