package com.sample.app.ssh.store;

import com.sample.app.ssh.model.Chassis;

import java.util.List;

public interface ChassisStore {

   List<Chassis> getObjects();

   Chassis getObjectById(String id);

   Chassis create(Chassis chassis);

   boolean update(Chassis chassis);

   Chassis delete(String id);
}
