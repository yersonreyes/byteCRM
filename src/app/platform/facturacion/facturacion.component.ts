import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TextareaModule } from 'primeng/textarea';
import { TooltipModule } from 'primeng/tooltip';
import { FacturacionAddComponent } from '../dialog/facturacion-add/facturacion-add.component';

@Component({
  selector: 'app-facturacion',
  imports: [
    ReactiveFormsModule, 
    CommonModule, 
    ButtonModule, 
    TableModule, 
    TooltipModule, 
    InputTextModule, 
    DividerModule, 
    TextareaModule,
    FacturacionAddComponent
  ],
  templateUrl: './facturacion.component.html',
  styleUrl: './facturacion.component.sass'
})
export class FacturacionComponent {
  visible: boolean = false;
  facturacionForm: FormGroup;

  proyects = [
    {
      id: '1',
      name: 'Website Redesign',
      rut: 'Redesign of the corporate website for better UX/UI',
      direccion: 'TechCorp Ltd.',
      nfactura: 'INV-1001',
      fecha: '2023-10-01',
      monto: '5000',
    },
    {
      id: '2',
      name: 'Mobile App Development',
      rut: 'Development of a cross-platform mobile application',
      direccion: 'Innovatech Solutions',
      nfactura: 'INV-1002',
      fecha: '2023-09-15',
      monto: '12000',
    },
    {
      id: '3',
      name: 'Cloud Migration',
      rut: 'Migration of on-premise infrastructure to AWS cloud',
      direccion: 'Cloudify Inc.',
      nfactura: 'INV-1003',
      fecha: '2023-08-20',
      monto: '8000',
    },
    {
      id: '4',
      name: 'E-commerce Platform',
      rut: 'Development of an e-commerce platform with payment integration',
      direccion: 'ShopEase Ltd.',
      nfactura: 'INV-1004',
      fecha: '2023-07-10',
      monto: '15000',
    },
    {
      id: '5',
      name: 'Data Analytics Dashboard',
      rut: 'Creation of a dashboard for real-time data analytics',
      direccion: 'DataViz Corp.',
      nfactura: 'INV-1005',
      fecha: '2023-06-05',
      monto: '7000',
    }
  ];

  constructor( 
    private router: Router,
    private fb: FormBuilder
  ) {
    this.facturacionForm = this.fb.group({
      descripcion: [''],
      instrucciones: [''],
      ProvedorDePagos: [''],
      moneda: [''],
      cicloDeFacturacion: [''],
      endDate: ['']
    });
  }

  addFacturecion() {
    this.visible = true;
  }

  navigateToView(id: string) {
    this.router.navigate(['/platform/proyects-view', id]);
  }

  navigateToFacturacion(id: string) {
    this.router.navigate(['/platform/facturacion', id]);
  }

  
  onSubmit(): void {
    if (this.facturacionForm.valid) {
      console.log('Form Submitted', this.facturacionForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onClose() {
    this.visible = false;
  }
}
