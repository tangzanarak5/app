import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
@Component({
    selector: "standbytologin",
    templateUrl: "standbytologin.component.html",
    moduleId: module.id
})

export class StandByToLoginComponent {
    constructor(page: Page) {
        page.actionBarHidden = true;
    }
 }