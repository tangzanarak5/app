import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, UrlSegment } from "@angular/router";
import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response, RequestOptions } from '@angular/http'
import { connectionType, getConnectionType } from "connectivity";
import { Page } from "tns-core-modules/ui/page";
import { securityService } from "../security.service";
import { checkRegister } from "../model/checkRegister.model"

@Component({
    selector: "registerPassword",
    templateUrl: "registerPassword.component.html",
    styleUrls: ['registerPassword.component.css'],
    moduleId: module.id
})

export class registerPasswordComponent implements OnInit {

    Firebase = require("nativescript-plugin-firebase-common").Firebase;
    firebase = this.Firebase.createNew({
        url: 'https://fir-appproject14.firebaseio.com'
      });
    registerUsers = this.firebase.child("registerUsers");

    checkRegister: checkRegister;
    password = "";
    samePassword = "" ;
    splitPassword;
    sumPassword ="";
 constructor(
    page: Page,
    private router: Router,
    private route: ActivatedRoute,
) {
    page.actionBarHidden = true;
    route.url.subscribe((s:UrlSegment[]) => {
        console.log("url", s);
    });
}

ngOnInit(): void {
    this.checkRegister = new checkRegister();
    console.log(securityService.getCheckRegister);
    this.checkRegister = JSON.parse(securityService.getCheckRegister);
    console.log(this.checkRegister.idCard);
    console.log(this.checkRegister.hn);
}

checkPassword () {
    
     this.splitPassword = this.password.split("");
   
     for(let i=0;i<this.splitPassword.length;i++){
         if (this.splitPassword[i] == "a"){
             this.sumPassword = this.sumPassword + this.splitPassword[i]
         }
        else if (this.splitPassword[i] == "b"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "c"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "d"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "e"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "f"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "g"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "h"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "i"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "j"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "k"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "l"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "m"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "n"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "o"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "p"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "q"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "r"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "s"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "t"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "u"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "v"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "w"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "x"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "y"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "z"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "A"){
            this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
       else if (this.splitPassword[i] == "B"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "C"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "D"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "E"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "F"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "G"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "H"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "I"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "J"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "K"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "L"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "M"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "N"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "O"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "P"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "Q"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "R"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "S"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "T"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "U"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "V"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "W"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "X"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "Y"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "Z"){
           this.sumPassword = this.sumPassword + this.splitPassword[i]
       }
       else if (this.splitPassword[i] == "0"){
        this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "1"){
         this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "2"){
         this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "3"){
         this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "4"){
         this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "5"){
         this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "6"){
         this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "7"){
         this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "8"){
         this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
        else if (this.splitPassword[i] == "9"){
         this.sumPassword = this.sumPassword + this.splitPassword[i]
        }
         else {
             i = this.splitPassword.length;
             this.splitPassword = "";
             this.sumPassword = "ไม่สามารถใส่อักษรพิเศษได้";
         }
     }
       

    if (this.password != "" && this.samePassword != ""){

        if (this.password == this.samePassword) {
            if (this.sumPassword == "ไม่สามารถใส่อักษรพิเศษได") {
                alert(this.sumPassword)
            }
            else{
                //alert("ผ่าน");
                var registerUser = this.firebase.push(
                    {
                      'hn': this.checkRegister.hn,
                      'idCard': this.checkRegister.idCard,
                      'password': this.password
                    }
                );
                this.checkRegister.idCard = "";
                this.checkRegister.hn = "";
                securityService.setCheckRegister = JSON.stringify(this.checkRegister);
                this.router.navigate(["/security/standbytologin"]);
            }
        }
        if (this.password != this.samePassword) {
          alert("รหัสผ่านไม่ถูกต้อง");
        }
    }
    else {
        if (this.password == "" && this.samePassword != ""){
            alert("กรุณาใส่รหัสผ่าน");
        }
        if (this.password != "" && this.samePassword == ""){
            alert("กรุณาใส่ยืนยันรหัสผ่าน");
        }
        if (this.password == "" && this.samePassword == ""){
            alert("กรุณาใส่รหัสผ่าน");
        }
    }
}

}