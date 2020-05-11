package com.sample.app.ssh.services;

import com.sample.app.ssh.model.SSHUser;

import java.util.Vector;

public interface SSHService{

    String executeCommand(String cmd);

    String executeCmd(String cmd);

    String executeShellCmd(String cmd);

    String getHistory();

    boolean updateUser(SSHUser user);

    Vector<String> getFileList();

    String getFileInfo();
}
