import { Component } from "@angular/core";
import { Router, ActivatedRoute, UrlSegment } from "@angular/router";
@Component({
    selector: "login",
    templateUrl: "login.component.html",
    moduleId: module.id
})

export class LoginComponent {
    constructor(private router: Router,r: ActivatedRoute) {
        r.url.subscribe((s:UrlSegment[]) => {
         console.log("url", s);
     });
 } 
 }