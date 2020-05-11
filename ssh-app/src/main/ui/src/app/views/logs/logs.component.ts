/* Copyright (c) 2018 VMware, Inc. All rights reserved. */

import {Component, Inject} from "@angular/core";
import { OnInit } from "@angular/core";
import { Chassis } from "../../model/chassis.model";
import {UserService} from "../../services/user.service";
import {SSHService} from "../../services/ssh.service";

@Component(
    {
        templateUrl: "./logs.component.html"
    }
)

export class LogsComponent implements OnInit {
    showSuccessPage: boolean;
    logData: string;
    time: number;

    constructor(@Inject(SSHService) public sshService: SSHService) {

    }

    ngOnInit(): void {
        this.showSuccessPage = false;
        this.logData = "";
    }

    onRefresh() {
        this.showSuccessPage = false;
        this.sshService.getLogs().then((result: string)=>{
            if(result){
                this.showSuccessPage = true;
                this.logData = result;
                this.time = Date.now();
            }
        })
    }
}
