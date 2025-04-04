import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-proyects',
  imports: [ButtonModule,TableModule,TooltipModule],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.sass'
})
export class ProyectsComponent {

  proyects = [
    {
      id : '1',
      name : 'Proyect 1',
      description : 'Description of proyect 1',
      client : 'Client 1',
      status : 'Active',
      startDate : '2023-01-01',
      endDate : '2023-12-31',
    }
  ]

  constructor( 
    private router: Router,
    
  ) {}

  navigateToCreateClient() {
    this.router.navigate(['/platform/proyects-new']);
  }

  navigateToDocumentTec(id: string) {
    this.router.navigate(['/platform/proyects-document-tec/', id]);
  }

  navigateToFacturacion(id: string) {
    this.router.navigate(['/platform/facturacion/', id]);
  }

  navigateToAnalisisFuncional(id: string) {
    this.router.navigate(['/platform/analisisFuncional/', id]);
  }

  navigateToTask(id: string) {
    this.router.navigate(['/platform/tareas/', id]);
  }

  navigateToValoracion(id: string) {
    this.router.navigate(['/platform/valoracion/', id]);
  }

}
