/* Copyright (c) 2018 VMware, Inc. All rights reserved. */

package com.sample.app.ssh.controllers;

import java.util.List;

import com.sample.app.ssh.model.Chassis;
import com.sample.app.ssh.services.ChassisService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * A controller to serve HTTP JSON GET/POST requests to the endpoint "/rest".
 */
@RestController
@RequestMapping("/rest/chassis")
public class ChassisController {

   private final ChassisService chassisService;

   public ChassisController(final ChassisService chassisService) {
      this.chassisService = chassisService;
   }

   /**
    * Retrieves a chassis data by a given chassis id.
    *
    * @param objectId   id of the chassis object.
    * @return  the chassis object.
    */
   @RequestMapping(value = "/{objectId}", method = RequestMethod.GET)
   public Chassis getChassisById(
         @PathVariable("objectId") final String objectId) {
      return chassisService.getChassisById(objectId);
   }

   /**
    * Retrieves all chassis objects.
    *
    * @return list of chassis objects or null if there are none.
    * @throws Exception
    */
   @RequestMapping(value = "/list", method = RequestMethod.GET)
   public List<Chassis> getChassisList() {
      return chassisService.getAllChassis();
   }

   /**
    * Creates a new chassis object.
    *
    * @param chassis  the new chassis.
    * @return the id of the created chassis or null if no chassis object is created.
    */
   @RequestMapping(value = "/create", method = RequestMethod.POST)
   public String create(@RequestBody final Chassis chassis) {
      return chassisService.create(chassis);
   }

   /**
    * Edits a chassis object.
    *
    * @param chassis chassis object to be updated.
    * @return true if chassis object was successfully updated or false otherwise.
    */
   @RequestMapping(value = "/edit", method = RequestMethod.PUT)
   public boolean edit(@RequestBody final Chassis chassis) {
      return chassisService.update(chassis);
   }

   /**
    * Deletes a chassis object.
    *
    * @param ids ids of chassis objects to be deleted.
    * @return true if at least one chassis object was successfully deleted or false otherwise.
    */
   @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
   public void delete(@RequestParam final String ids[]) {
      for (final String targetId : ids) {
         chassisService.delete(targetId);
      }
   }
}

