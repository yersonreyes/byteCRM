import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ClientsComponent } from "./clients/clients.component";
import { ProyectsComponent } from "./proyects/proyects.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { ClientsNewComponent } from "./clients-new/clients-new.component";
import { ClientsViewComponent } from "./clients-view/clients-view.component";
import { ProyectsNewComponent } from "./proyects-new/proyects-new.component";
import { ProyectsViewComponent } from "./proyects-view/proyects-view.component";
import { FacturacionComponent } from "./facturacion/facturacion.component";
import { FacturacionNewComponent } from "./facturacion-new/facturacion-new.component";
import { FacturacionViewComponent } from "./facturacion-view/facturacion-view.component";


export const PLATFORM_ROUTES: Routes = [
    {path: '', component : LayoutComponent, children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'clients', component: ClientsComponent},
        {path: 'clients-new', component: ClientsNewComponent},
        {path: 'clients-view/:id', component: ClientsViewComponent}, // Added :id to the path
        {path: 'proyects' , component: ProyectsComponent },
        {path: 'proyects-new' , component: ProyectsNewComponent },
        {path: 'proyects-view/:id' , component: ProyectsViewComponent },
        {path: 'notifications' , component: NotificationsComponent },
        {path: 'facturacion/:id' , component: FacturacionComponent },
        {path: 'facturacion-new' , component: FacturacionNewComponent },
        {path: 'facturacion-view/:id' , component: FacturacionViewComponent }, // Added :id to the path


    ]},
]
