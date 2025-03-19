import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ClientsComponent } from "./clients/clients.component";
import { ProyectsComponent } from "./proyects/proyects.component";
import { NotificationsComponent } from "./notifications/notifications.component";


export const PLATFORM_ROUTES: Routes = [
    {path: '', component : LayoutComponent, children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'clients', component: ClientsComponent},
        {path: 'proyects' , component: ProyectsComponent },
        {path: 'notifications' , component: NotificationsComponent }

    ]},

]