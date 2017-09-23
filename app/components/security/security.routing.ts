import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { SecurityComponent } from "./security.component";
import { StandByToLoginComponent } from "./standbytologin/standbytologin.component";

const routes: Routes = [
    { path: "security", component: SecurityComponent, 
    children: [
        {
        path: '',
        redirectTo: '/security/standbytologin',
        pathMatch: 'full'
        },
        {
            path: 'standbytologin',
            component: StandByToLoginComponent
        }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class SecurityRouting { }