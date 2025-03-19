import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RecoverPasswordComponent } from "./recover-password/recover-password.component";
import { RegisterComponent } from "./register/register.component";
import { LayoutComponent } from "./layout/layout.component";
import { NewPasswordComponent } from "./new-password/new-password.component";

export const AUTH_ROUTES: Routes = [
    {path: '', component : LayoutComponent, children: [
        {path: 'login', component : LoginComponent},
        {path: 'recover', component : RecoverPasswordComponent},
        {path: 'register' , component : RegisterComponent},
        {path: 'newpassword' , component :NewPasswordComponent},

        {path: '', redirectTo: 'login', pathMatch: 'full'}
    ]},

]