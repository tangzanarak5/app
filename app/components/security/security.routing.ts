import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes, RouterModule } from "@angular/router";
import { SecurityComponent } from "./security.component";
import { StandByToLoginComponent } from "./standbytologin/standbytologin.component";
import { LoginComponent } from "./login/login.component";

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