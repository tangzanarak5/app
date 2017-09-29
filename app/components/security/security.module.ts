import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { SecurityComponent } from "./security.component";
import { SecurityRouting } from "./security.routing";
import { StandByToLoginComponent } from "./standbytologin/standbytologin.component";
import { LoginComponent } from "./login/login.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { verifyidcardComponent } from "./verifyidcard/verifyidcard.component";
import { registerAccountComponent } from "./registerAccount/registerAccount.component";
import { verifyidcardService } from "../security/verifyidcard/verifyidcard.service";

@NgModule({
    imports: [
        NativeScriptModule,
        SecurityRouting,
        NativeScriptFormsModule
    ],
    declarations: [
        SecurityComponent,
        StandByToLoginComponent,
        LoginComponent,
        registerAccountComponent,
        verifyidcardComponent
        
    ],
    providers: [
        verifyidcardService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class SecurityModule { }
