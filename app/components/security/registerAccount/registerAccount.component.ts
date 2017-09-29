import { Component } from "@angular/core";
import { Router, ActivatedRoute, UrlSegment } from "@angular/router";
@Component({
    selector: "registerAccount",
    templateUrl: "registerAccount.component.html",
    moduleId: module.id
})

export class registerAccountComponent {

    phoneNumber;

    constructor(private router: Router,r: ActivatedRoute) {
        r.url.subscribe((s:UrlSegment[]) => {
         console.log("url", s);
     });
 }
 }