import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ClientsComponent } from "./clients/clients.component";
import { ProyectsComponent } from "./proyects/proyects.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { ClientsNewComponent } from "./clients-new/clients-new.component";
import { ClientsViewComponent } from "./clients-view/clients-view.component";
import { ProyectsNewComponent } from "./proyects-new/proyects-new.component";
import { FacturacionComponent } from "./facturacion/facturacion.component";
import { DocumentacionTecnicaComponent } from "./documentacion-tecnica/documentacion-tecnica.component";
import { AnalisisFuncionalComponent } from "./analisis-funcional/analisis-funcional.component";
import { TareasComponent } from "./tareas/tareas.component";
import { ValoracionComponent } from "./valoracion/valoracion.component";



export const PLATFORM_ROUTES: Routes = [
    {path: '', component : LayoutComponent, children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'clients', component: ClientsComponent},
        {path: 'clients-new', component: ClientsNewComponent},
        {path: 'clients-view/:id', component: ClientsViewComponent}, // Added :id to the path
        {path: 'proyects' , component: ProyectsComponent },
        {path: 'proyects-new' , component: ProyectsNewComponent },
        {path: 'proyects-document-tec/:id' , component: DocumentacionTecnicaComponent },
        {path: 'notifications' , component: NotificationsComponent },
        {path: 'facturacion/:id' , component: FacturacionComponent },
        {path: 'analisisFuncional/:id' , component: AnalisisFuncionalComponent },
        {path: 'tareas/:id' , component: TareasComponent },
        {path: 'valoracion/:id' , component: ValoracionComponent },


    ]},
]
