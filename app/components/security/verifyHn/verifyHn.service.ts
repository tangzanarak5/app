import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { connectionType, getConnectionType } from "connectivity";
import { securityService } from "../security.service";
import { checkHn } from "../model/checkHn.model"

@Injectable()
export class verifyHnService {

    checkHn: checkHn;
    token = "826e3b99209de82685009d0eff4c2703f";

    getDataPatient (): Observable<any> {
        this.checkHn = new checkHn();
        console.log(securityService.getCheckHn);
        this.checkHn = JSON.parse(securityService.getCheckHn);
        console.log(this.checkHn.idCard);
        let url = "https://cpa.go.th/api/patient.php?request=get&cid=" + this.checkHn.idCard + "&token=" + this.token;
        return this.http.get(url).map(response => response.json())
        .catch(this.handleErrors);
    }
  
    constructor(
        private router: Router,
        private http: Http
    ) { }
handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
}
}