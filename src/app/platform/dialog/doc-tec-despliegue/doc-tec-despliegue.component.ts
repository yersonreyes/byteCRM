import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-doc-tec-despliegue',
  imports: [
    Dialog,    
    InputTextModule, 
    DividerModule, 
    TextareaModule,
    ReactiveFormsModule,
    ToastModule,
    CommonModule,
    ButtonModule

  ],
  templateUrl: './doc-tec-despliegue.component.html',
  styleUrl: './doc-tec-despliegue.component.sass'
})
export class DocTecDespliegueComponent {
  @Input() visible: boolean = true;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  
  repoForm: FormGroup;

  constructor(    private fb: FormBuilder) {
    this.repoForm = this.fb.group({
      nombre: ['', [Validators.required]], // Nombre del despliegue
      fechaHora: ['', [Validators.required]], // Fecha y hora del despliegue
      ambiente: ['', [Validators.required]], // Ambiente
      url: ['', [Validators.pattern('https?://.+')]], // URL del despliegue (opcional)
      version: ['', [Validators.required]], // Versión del software
      repositorio: ['', [Validators.required]], // Repositorio asociado
      servidor: ['', [Validators.required]], // Servidor o infraestructura
      metodo: ['', [Validators.required]], // Método de despliegue
      responsable: ['', [Validators.required]], // Responsable del despliegue
      estado: ['', [Validators.required]], // Estado del despliegue
      changelog: ['', [Validators.required]], // Changelog o descripción de cambios
      logs: ['', [Validators.pattern('https?://.+')]], // Registros o logs del despliegue (opcional)
      rollback: ['', [Validators.required]], // Rollback disponible
      observaciones: [''] // Observaciones (opcional)

    });
   }

   onSubmit() {
    console.log(this.repoForm.value);
    this.closeDialog();

   }

   closeDialog() {
    this.onClose.emit(); // Emitir el evento al cerrar el diálogo
  }
}
