/* Copyright (c) 2018 VMware, Inc. All rights reserved. */

import {Injectable} from "@angular/core";
import {Command} from "../model/command.model";
import {GlobalService} from "./global.service";

import "rxjs/add/operator/toPromise";
import {HttpService} from "./http.service";
import {URLSearchParams} from "../../../node_modules/@angular/http/src/url_search_params";

@Injectable()
export class SSHService extends GlobalService {

    constructor(private httpService: HttpService) {
        super();
    }

    /**
     Sends a command to server
     */

    public execute(command: Command): Promise<Command | null> {
        return new Promise(((resolve, reject) => {
            this.httpService.post("api/executeCmd", command)
                .subscribe((result: any) => {
                    if (result) {
                        command.result = result;
                        resolve(command);
                    } else {
                        reject("Failed to execute.")
                    }
                })
        }))
    }

    public executeShell(command: Command): Promise<Command | null> {
        return new Promise(((resolve, reject) => {
            this.httpService.post("api/executeShellCmd", command)
                .subscribe((result: any) => {
                    if (result) {
                        command.result = result;
                        resolve(command);
                    } else {
                        reject("Failed to execute.")
                    }
                })
        }))
    }

    public getLogs(): Promise<string| null> {
        return new Promise(((resolve, reject) => {
            this.httpService.get("api/getLogs").subscribe((result)=>{
                if(result){
                    resolve(result);
                }else{
                    reject("Failed");
                }
            })
        }))
    }

}

