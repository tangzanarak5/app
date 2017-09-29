import { Component } from "@angular/core";
import { Router, ActivatedRoute, UrlSegment } from "@angular/router";
import { verifyidcardService } from "./verifyidcard.service";
import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response, RequestOptions } from '@angular/http'
import { connectionType, getConnectionType } from "connectivity";
@Component({
    selector: "verifyidcard",
    templateUrl: "verifyidcard.component.html",
    moduleId: module.id
})

export class verifyidcardComponent {

    idCard;
    res;

    getDataPeople () {
        this.verifyidcardService.getCompanyGuidPJM()
        .subscribe(
            (Response) => {
                let resultData = Response;
                let testtest = resultData.guid;
            },
            (error) => {
                alert("Get Error");
            }
        )
    }
    
    constructor(private router: Router,r: ActivatedRoute, private verifyidcardService: verifyidcardService) {
        r.url.subscribe((s:UrlSegment[]) => {
         console.log("url", s);
     });
 }
 
    checkIdCard () {
        this.res = this.idCard.split("");
        console.log(this.res);
        let r = 13;
        let result=[];
        let total=0;
        let sum=0;
        let CheckDigit=0;
        let SumDigit=0;
        for(let i = 0;i<12;i++){
           result[i] = this.res[i] * r;
            r--;
            total = total + result[i];
            console.log(result[i] + "\n");
        }
        console.log(total);
        sum = sum + (total%11);
        console.log(sum);
        CheckDigit = 11-sum;
        console.log(CheckDigit);

        if(CheckDigit >= 10){
           SumDigit = CheckDigit%10;
           if(SumDigit == this.res[12]){
                console.log("หมายเลขบัตรประชาชนถูกต้อง");
                console.log(this.res[12]);
                this.getDataPeople();
           }
           else{
                console.log("หมายเลขบัตรประชาชนไม่ถูกต้อง");
                console.log(this.res[12]);
           }
        }
        if(CheckDigit < 10){
            if(CheckDigit == this.res[12]){
                console.log("หมายเลขบัตรประชาชนถูกต้อง");
                console.log(this.res[12]);
                this.getDataPeople();
           }
           else{
                console.log("หมายเลขบัตรประชาชนไม่ถูกต้อง");
                console.log(this.res[12]);
           }
        }

    }
 }