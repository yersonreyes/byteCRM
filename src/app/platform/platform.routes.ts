import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ClientsComponent } from "./clients/clients.component";
import { ProyectsComponent } from "./proyects/proyects.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { ClientsNewComponent } from "./clients-new/clients-new.component";
import { ClientsViewComponent } from "./clients-view/clients-view.component";


export const PLATFORM_ROUTES: Routes = [
    {path: '', component : LayoutComponent, children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'clients', component: ClientsComponent},
        {path: 'clients-new', component: ClientsNewComponent},
        {path: 'clients-view/:id', component: ClientsViewComponent}, // Added :id to the path
        {path: 'proyects' , component: ProyectsComponent },
        {path: 'notifications' , component: NotificationsComponent }
    ]},
]
