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
  selector: 'app-doc-tec-wireframe',
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
  templateUrl: './doc-tec-wireframe.component.html',
  styleUrl: './doc-tec-wireframe.component.sass'
})
export class DocTecWireframeComponent {
  @Input() visible: boolean = true;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  
  repoForm: FormGroup;

  constructor(    private fb: FormBuilder) {
    this.repoForm = this.fb.group({
      nombre: ['', [Validators.required]], // Nombre del wireframe
      enlace: ['', [Validators.pattern('https?://.+')]], // Enlace al wireframe (opcional)
      descripcion: ['', [Validators.required]], // Descripción breve
      fechaCreacion: ['', [Validators.required]], // Fecha de creación
      responsable: ['', [Validators.required]], // Responsable del wireframe
      estado: ['', [Validators.required]], // Estado del wireframe (Borrador, Revisión, Aprobado, etc.)
      comentarios: [''] // Comentarios adicionales (opcional)
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
