import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Dialog } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-facturacion-add',
  imports: [
      Dialog,    
      InputTextModule, 
      DividerModule, 
      TextareaModule,
      ReactiveFormsModule,
      FileUpload,
      ToastModule,
      FileUploadModule,
      HttpClientModule,
      CommonModule,
      ButtonModule

    ],
    providers: [MessageService],
    templateUrl: './facturacion-add.component.html',
    styleUrl: './facturacion-add.component.sass'
})
export class FacturacionAddComponent {
  @Input() visible: boolean = false;
  @Input() title: string = 'Agregar Factura';

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  facturacionForm: FormGroup;

  facturasDocumentos: any[] = [];
  comprobantesDocumentos: any[] = [];

  constructor(    private fb: FormBuilder, private messageService: MessageService) {
    this.facturacionForm = this.fb.group({
      fullNameOrCompany: ['', [Validators.required, Validators.minLength(3)]],
      giro : ['', [Validators.required]],
      rut: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      date: ['', [Validators.required]],
      nFactura: ['', [Validators.required]],
      value: ['', [Validators.required]],

    });
   }


   
  closeDialog() {
    this.onClose.emit(); // Emitir el evento al cerrar el diálogo
  }

   onSubmit() {
    console.log(this.facturacionForm.value);
    this.closeDialog();

   }

   onUploadFacturas(event: any) {
    console.log(event.files);
    this.facturasDocumentos = event.files;

    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  }


  deleteFactura(index: number) {
    this.facturasDocumentos.splice(index, 1);
  }

  
  onUploadComprobante(event: any) {
    console.log(event.files);
    this.comprobantesDocumentos = event.files;

    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  }

  deleteComprobante(index: number) {
    this.comprobantesDocumentos.splice(index, 1);
  }



}


//Instrucciones para ejecutar el dialog
// 1. debes importar el componente FacturacionAddComponent en el componente padre
// 2 .Debes declarar una variable booleana para controlar la visbilidad del dialog en el componente padre y pasarla como propiedad al componente hijo
// 3. Debes declarar un metodo en el componente padre para controlar el evento de cierre del dialog y pasarlo como propiedad al componente hijo
