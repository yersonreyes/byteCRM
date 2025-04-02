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
  selector: 'app-doc-tec-database',
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
  templateUrl: './doc-tec-database.component.html',
  styleUrl: './doc-tec-database.component.sass'
})
export class DocTecDatabaseComponent {
  @Input() visible: boolean = true;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  
  repoForm: FormGroup;

  constructor(    private fb: FormBuilder) {
    this.repoForm = this.fb.group({
      nombre: ['', [Validators.required]], // Nombre de la base de datos (Ejemplo: crm_db, usuarios_prod, logs_app)
      tipo: ['', [Validators.required]], // Tipo de base de datos (SQL, NoSQL, NewSQL, GraphDB, etc.)
      motor: ['', [Validators.required]], // Motor de base de datos (Ejemplo: PostgreSQL, MySQL, MongoDB, Redis, etc.)
      version: ['', [Validators.required]], // Versión actual (Ejemplo: PostgreSQL 16, MongoDB 6.0)
      servidor: ['', [Validators.required]], // Servidor o ubicación (Dónde está alojada: AWS RDS, local, DigitalOcean, etc.)
      ambiente: ['', [Validators.required]], // Ambiente (Producción, Desarrollo, Staging, QA)
      repositorioRelacionado: ['', [Validators.required]], // Repositorio relacionado (Si hay un repositorio de migraciones o estructura)
      urlConexion: ['', [Validators.pattern('https?://.+')]], // URL de conexión (Opcional, dependiendo de la seguridad)
      esquemaDatos: ['', [Validators.pattern('https?://.+')]], // Esquema de datos (Enlace a diagramas o documentación de la estructura)
      usuariosAcceso: ['', [Validators.required]], // Usuarios con acceso (Lista de roles y permisos)
      metodoAutenticacion: ['', [Validators.required]], // Método de autenticación (Contraseña, IAM, OAuth, SSL, etc.)
      frecuenciaRespaldo: ['', [Validators.required]], // Frecuencia de respaldo (Diario, Semanal, Manual, Automático)
      ubicacionRespaldo: ['', [Validators.required]], // Ubicación de los respaldos (Dónde se almacenan los backups)
      integraciones: ['', [Validators.required]], // Integraciones (Servicios que la utilizan, APIs conectadas)
      capacidadAlmacenamiento: ['', [Validators.required]], // Capacidad de almacenamiento (Límite actual y espacio utilizado)
      historialCambios: [''], // Historial de cambios (Últimas modificaciones en la estructura)
      estado: ['', [Validators.required]], // Estado actual (Activa, En mantenimiento, Decomisionada)
      retencionDatos: ['', [Validators.required]], // Tiempo estimado de retención de datos (Ejemplo: 1 año, 5 años, indefinido)
      estrategiaEscalabilidad: ['', [Validators.required]], // Estrategia de escalabilidad (Sharding, Replicación, Particionamiento, etc.)
      observaciones: [''] // Observaciones o notas adicionales
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
