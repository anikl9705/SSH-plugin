/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */
package com.sample.app.ssh.gateway;

import com.vmware.vim25.VimPortType;

public interface SessionService {
   VimPortType getVimPort(final String vcenterGuid);
}
