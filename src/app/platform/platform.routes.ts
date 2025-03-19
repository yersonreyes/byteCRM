import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


export const PLATFORM_ROUTES: Routes = [
    {path: '', component : LayoutComponent, children: [
        {path: 'dashboard', component: DashboardComponent},

    ]},

]