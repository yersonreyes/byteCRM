import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-doc-tec-repo',
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
  templateUrl: './doc-tec-repo.component.html',
  styleUrl: './doc-tec-repo.component.sass'
})
export class DocTecRepoComponent {
  @Input() visible: boolean = true;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  
  repoForm: FormGroup;

  constructor(    private fb: FormBuilder) {
    this.repoForm = this.fb.group({
      nombre: ['', [Validators.required]], // Nombre del repositorio
      tipo: ['', [Validators.required]], // Tipo de repositorio
      link: ['', [Validators.required, Validators.pattern('https?://.+')]], // Enlace al repositorio
      tecnologias: ['', [Validators.required]], // Tecnologías utilizadas
      branchPrincipal: ['', [Validators.required]], // Branch principal
      ultimaActualizacion: ['', [Validators.required]], // Última actualización
      mantenimientoActivo: ['', [Validators.required]], // Mantenimiento activo
      accesos: ['', [Validators.required]], // Accesos o permisos
      visibilidad: ['', [Validators.required]], // Repositorio privado o público
      descripcion: ['', [Validators.required]], // Descripción breve
      enlaceDocumentacion: ['', [Validators.pattern('https?://.+')]], // Enlace a documentación
      idProyecto: ['', [Validators.required]], // ID o relación con el proyecto
      sistemaControlVersiones: ['', [Validators.required]], // Sistema de control de versiones
      integraciones: ['', [Validators.required]], // Integraciones
      estadoActual: ['', [Validators.required]] // Estado actual

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
