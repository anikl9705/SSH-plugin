import {Component, Inject, OnInit} from "@angular/core";
import {User} from "../../model/user.model";
import {UserService} from "../../services/user.service";

@Component(
    {
        templateUrl: "./settings-user.component.html"
    }
)

export class SettingsUserComponent implements OnInit{
    username: string;
    password: string;
    hostname: string;
    showSuccessMessage: boolean;
    isAvailable: boolean;

    constructor(@Inject(UserService) public userService: UserService) {

    }

    ngOnInit(): void {
        // let user = localStorage.getItem("sshuser") as Object;
        let user = Object.assign(new User(), JSON.parse(localStorage.getItem("sshuser")));
        this.username = user.username;
        this.password = user.password;
        this.hostname = user.hostname;
        this.isAvailable = false;
        this.showSuccessMessage = false;
    }

    onUpdate(): void{
        this.showSuccessMessage = false;
        let user = new User();
        user.username = this.username;
        user.password = this.password;
        user.hostname = this.hostname;
        this.userService.updateUser(user).then((result: User) => {
            if(result){
                localStorage.setItem("sshuser", JSON.stringify(result));
                this.showSuccessMessage = true;
                this.isAvailable = true;
                this.userService.htmlClientSdk.modal.close(result);
            }
        }).catch(() => {
            this.userService.htmlClientSdk.modal.close();
        });
    }
}