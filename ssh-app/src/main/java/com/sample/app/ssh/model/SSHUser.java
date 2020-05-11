package com.sample.app.ssh.model;

import com.jcraft.jsch.UserInfo;

public class SSHUser implements UserInfo {
    private String username;
    private String password;
    private String hostname;

    public void updateData(String username, String password, String hostname){
        this.username = username;
        this.password = password;
        this.hostname = hostname;
    }

    @Override
    public String toString(){
        return "user: " + this.username + ", pass: " + this.password + ", host: " + this.hostname;
    }

    @Override
    public String getPassphrase() {
        return null;
    }

    @Override
    public boolean promptPassword(String s) {
        return true;
    }

    @Override
    public boolean promptPassphrase(String s) {
        return false;
    }

    @Override
    public boolean promptYesNo(String s) {
        return true;
    }

    @Override
    public void showMessage(String s) {

    }

    public String getUsername(){
        return this.username;
    }

    @Override
    public String getPassword(){
        return this.password;
    }

    public String getHostname(){
        return this.hostname;
    }
}
