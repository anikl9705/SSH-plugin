package com.sample.app.ssh.controllers;

import com.sample.app.ssh.model.Command;
import com.sample.app.ssh.model.SSHUser;
import com.sample.app.ssh.services.SSHService;
import com.sample.app.ssh.services.SSHServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/api")
public class SSHController {

//    @Autowired
    private final SSHService sshService;
    private static final Logger LOGGER= LoggerFactory.getLogger(SSHController.class);

    public SSHController(final SSHService sshService){
        this.sshService = sshService;
    }

    @RequestMapping(value = "/executeCmd", method = RequestMethod.POST)
    public String execute(@RequestBody final Command command){
        LOGGER.info(command.getCmd());
        return sshService.executeCmd(command.getCmd());
    }


    @RequestMapping(value = "/executeShellCmd", method = RequestMethod.POST)
    public String executeShell(@RequestBody final Command command){
        LOGGER.info(command.getCmd());
        return sshService.executeShellCmd(command.getCmd());
    }

//    @RequestMapping(value = "/gethistory", method = RequestMethod.GET)
//    public String getHistory(){
//        return sshService.getHistory();
//    }

    @RequestMapping(value = "/updUser", method = RequestMethod.POST)
    public boolean updUser(@RequestBody final SSHUser user){
        LOGGER.info(user.toString());
        return sshService.updateUser(user);
    }

    @RequestMapping(value = "/getLogs", method = RequestMethod.GET)
    public String getLog(){
        return sshService.getFileInfo();
    }
}
