import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { connectionType, getConnectionType } from "connectivity";

@Injectable()
export class verifyidcardService {
    getDataPatient (): Observable<any> {
        let url = "http://192.168.1.11:7777/user";
        return this.http.get(url).map(response => response.json())
        .catch(this.handleErrors);
    }
    getCompanyGuidPJM(): Observable<any> {
        let url = "http://prototype-privatenirvana.on.lk/"
        console.log(url);
        return this.http.get(url + '/api/ApiAuthentication/getCompanyGUID').map(response => response.json())
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