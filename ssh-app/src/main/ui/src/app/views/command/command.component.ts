import {Component, Inject, OnInit} from "@angular/core";
import {User} from "../../model/user.model";
import {UserService} from "../../services/user.service";
import {SSHService} from "../../services/ssh.service";
import {Command} from "../../model/command.model";

@Component(
    {
        templateUrl: "./command.component.html"
    }
)

export class CommandComponent implements OnInit{
    command: string;
    result: string;
    showSuccessMessage: boolean;
    showFailMessage: boolean;

    constructor(@Inject(SSHService) public sshService: SSHService) {

    }

    ngOnInit(): void {
        // let user = localStorage.getItem("sshuser") as Object;
        this.command = "";
        this.result = "";
        this.showSuccessMessage = false;
        this.showFailMessage = false;
    }

    onExecute(): void{
        this.showSuccessMessage = false;
        this.showFailMessage = false;
        let command = new Command();
        command.result = "";
        command.cmd = this.command;
        this.sshService.execute(command).then((res) => {
            if(res){
                this.result = res.result;
                this.showSuccessMessage = true;
                this.sshService.htmlClientSdk.modal.close(res);
            }else{
                this.showFailMessage = true;
                console.log("HERE");
            }
        }).catch(()=>{
            this.showFailMessage = true;
            console.log("HERE2");
            this.sshService.htmlClientSdk.modal.close();
        });
    }
}