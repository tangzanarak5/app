import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { SecurityComponent } from "./security.component";
import { SecurityRouting } from "./security.routing";
import { StandByToLoginComponent } from "./standbytologin/standbytologin.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
    imports: [
        NativeScriptModule,
        SecurityRouting
    ],
    declarations: [
        SecurityComponent,
        StandByToLoginComponent,
        LoginComponent
    ],
    providers: [
        
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class SecurityModule { }
