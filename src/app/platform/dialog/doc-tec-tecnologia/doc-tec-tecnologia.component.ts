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
  selector: 'app-doc-tec-tecnologia',
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
  templateUrl: './doc-tec-tecnologia.component.html',
  styleUrl: './doc-tec-tecnologia.component.sass'
})
export class DocTecTecnologiaComponent {
  @Input() visible: boolean = true;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  
  repoForm: FormGroup;

  constructor(    private fb: FormBuilder) {
    this.repoForm = this.fb.group({
      nombre: ['', [Validators.required]], // Nombre de la tecnología (Ejemplo: Angular, Nest.js, MongoDB, Docker)
      versionActual: ['', [Validators.required]], // Versión actual (Ejemplo: Angular 17, Node.js 20, PostgreSQL 16)
      categoria: ['', [Validators.required]], // Categoría (Frontend, Backend, Base de Datos, Infraestructura, DevOps, etc.)
      descripcion: ['', [Validators.required]], // Descripción breve (Resumen del propósito y uso en el proyecto)
      enlaceDocumentacion: ['', [Validators.pattern('https?://.+')]], // Enlace a la documentación oficial (Para referencias rápidas)
      proyectosRelacionados: ['', [Validators.required]], // Proyectos en los que se usa (Relación con los proyectos dentro del CRM)
      repositorioRelacionado: ['', [Validators.required]], // Repositorio relacionado (Si hay un repositorio específico que la implemente)
      dependencias: ['', [Validators.required]], // Dependencias (Ejemplo: Nest.js usa TypeScript y Node.js)
      ultimaActualizacion: ['', [Validators.required]], // Última actualización (Fecha de la última actualización de la tecnología)
      estadoSoporte: ['', [Validators.required]], // Estado de soporte (Activo, en desuso, reemplazado, deprecated)
      motivoEleccion: ['', [Validators.required]], // Motivo de elección (Por qué se usa en el proyecto, ventajas frente a otras opciones)
      alternativas: ['', [Validators.required]], // Alternativas similares (Otras tecnologías que podrían reemplazarla)
      guiasUsoInterno: ['', [Validators.pattern('https?://.+')]], // Guías de uso interno (Enlace o referencia a cómo se usa en el equipo)
      integraciones: ['', [Validators.required]], // Integraciones (Con qué otras tecnologías o servicios se conecta)
      compatibilidad: ['', [Validators.required]], // Compatibilidad (Sistemas operativos, arquitecturas, versiones mínimas requeridas)
      ejemploUso: [''], // Ejemplo de uso (Snippet de código o explicación breve)
      mantenedor: [''], // Mantenedor en el equipo (Quién la gestiona en el proyecto)
      problemasComunes: [''], // Problemas comunes y soluciones (Errores frecuentes y cómo resolverlos)
      historialCambios: [''] // Historial de cambios en la versión (Si se lleva un control de migraciones)

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
