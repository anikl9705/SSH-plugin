/* Copyright (c) 2018 VMware, Inc. All rights reserved. */

import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import { GlobalService } from "./global.service";

import "rxjs/add/operator/toPromise";
import { HttpService } from "./http.service";

@Injectable()
export class UserService extends GlobalService {
    constructor(private httpService: HttpService) {
        super();
    }

    /**
        Update userinfo on server
    */
    public updateUser(user: User): Promise<User| null>{
        return new Promise(((resolve, reject) => {
            this.httpService.post("api/updUser", user).subscribe((result: any) =>{
                if(result){
                    user.status = true;
                    user.password = "******";
                    resolve(user);
                }else{
                    reject("Failed to update.");
                }
            })
        }));
    }
}
