import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes, RouterModule } from "@angular/router";
import { SecurityComponent } from "./security.component";
import { StandByToLoginComponent } from "./standbytologin/standbytologin.component";
import { LoginComponent } from "./login/login.component";
import { registerAccountComponent } from "./registerAccount/registerAccount.component";
import { verifyidcardComponent } from "./verifyidcard/verifyidcard.component";
const routes: Routes = [
    { 
        path: "security", 
        component: SecurityComponent, 
        children: [
            {
                path: '',
                redirectTo: '/security/standbytologin',
                pathMatch: 'full'
            },
            {
                path: 'standbytologin',
                component: StandByToLoginComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'registerAccount',
                component: registerAccountComponent
            },
            {
                path: 'verifyidcard',
                component: verifyidcardComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [
        NativeScriptRouterModule
    ]
})
export class SecurityRouting { }