import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { connectionType, getConnectionType } from "connectivity";
import { securityService } from "../security.service";
import { user } from "../model/user.model"

@Injectable()
export class verifyidcardService {

    user: user;
    token = "826e3b99209de82685009d0eff4c2703f";

    getDataPatient (): Observable<any> {
        this.user = new user();
        console.log(securityService.getUserData);
        this.user = JSON.parse(securityService.getUserData);
        console.log(this.user.idCard);
        let url = "https://cpa.go.th/api/patient.php?request=get&cid=" + this.user.idCard + "&token=" + this.token;
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