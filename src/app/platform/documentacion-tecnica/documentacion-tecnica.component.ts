import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { TextareaModule } from 'primeng/textarea';
import { DocTecRepoComponent } from "../dialog/doc-tec-repo/doc-tec-repo.component";
import { TableModule } from 'primeng/table';
import { DocTecDespliegueComponent } from "../dialog/doc-tec-despliegue/doc-tec-despliegue.component";
import { DocTecTecnologiaComponent } from '../dialog/doc-tec-tecnologia/doc-tec-tecnologia.component';
import { DocTecWireframeComponent } from '../dialog/doc-tec-wireframe/doc-tec-wireframe.component';
import { DocTecDatabaseComponent } from '../dialog/doc-tec-database/doc-tec-database.component';
import { DocTecFrontendComponent } from '../dialog/doc-tec-frontend/doc-tec-frontend.component';
import { DocTecBackendComponent } from '../dialog/doc-tec-backend/doc-tec-backend.component';

@Component({
  selector: 'app-documentacion-tecnica',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    DividerModule,
    TextareaModule,
    DocTecRepoComponent,
    TableModule,
    DocTecDespliegueComponent,
    DocTecTecnologiaComponent,
    DocTecWireframeComponent,
    DocTecDatabaseComponent,
    DocTecFrontendComponent,
    DocTecBackendComponent
],
  templateUrl: './documentacion-tecnica.component.html',
  styleUrl: './documentacion-tecnica.component.sass'
})
export class DocumentacionTecnicaComponent {
  clientForm: FormGroup;

  repoVisible: boolean = false;
  repositorio =  [
    {
      nombre: '', // Nombre del repositorio
      tipo: '', // Tipo de repositorio
      link: '', // Enlace al repositorio
      tecnologias: '', // Tecnologías utilizadas
      branchPrincipal: '', // Branch principal
      ultimaActualizacion: '', // Última actualización
      mantenimientoActivo: '', // Mantenimiento activo
      accesos: '', // Accesos o permisos
      visibilidad: '', // Repositorio privado o público
      descripcion: '', // Descripción breve
      enlaceDocumentacion: '', // Enlace a documentación
      idProyecto: '', // ID o relación con el proyecto
      sistemaControlVersiones: '', // Sistema de control de versiones
      integraciones: '', // Integraciones
      estadoActual: '' // Estado actual
    }
  ] 

  despliegueVisible: boolean = false;
  despliegue =  [
    {
      nombre: '', // Nombre del despliegue
      fechaHora: '', // Fecha y hora del despliegue
      ambiente: '', // Ambiente
      url: '', // URL del despliegue (opcional)
      version: '', // Versión del software
      repositorio: '', // Repositorio asociado
      servidor: '', // Servidor o infraestructura
      metodo: '', // Método de despliegue
      responsable: '', // Responsable del despliegue
      estado: '', // Estado del despliegue
      changelog: '', // Changelog o descripción de cambios
      logs: '', // Registros o logs del despliegue (opcional)
      rollback: '', // Rollback disponible
      observaciones: '' // Observaciones (opcional)
    }
  ]

  tecnologiaVisible: boolean = false;
  tecnologia = [
    {
      nombre: 'Angular', // Nombre de la tecnología
      versionActual: '17', // Versión actual
      categoria: 'Frontend', // Categoría
      descripcion: 'Framework para construir aplicaciones web', // Descripción breve
      enlaceDocumentacion: 'https://angular.io/docs', // Enlace a la documentación oficial
      proyectosRelacionados: 'CRM, Dashboard', // Proyectos en los que se usa
      repositorioRelacionado: 'https://github.com/example/angular-project', // Repositorio relacionado
      dependencias: 'TypeScript, RxJS', // Dependencias
      ultimaActualizacion: '2023-10-01', // Última actualización
      estadoSoporte: 'Activo', // Estado de soporte
      motivoEleccion: 'Popularidad y soporte de la comunidad', // Motivo de elección
      alternativas: 'React, Vue.js', // Alternativas similares
      guiasUsoInterno: 'https://internal-docs.example.com/angular', // Guías de uso interno
      integraciones: 'REST APIs, Firebase', // Integraciones
      compatibilidad: 'Cross-browser, Mobile-friendly', // Compatibilidad
      ejemploUso: '<app-root></app-root-root>', // Ejemplo de uso
      mantenedor: 'Equipo Frontend', // Mantenedor en el equipo
      problemasComunes: 'Errores de compilación con TypeScript', // Problemas comunes y soluciones
      historialCambios: 'Actualización a Angular 17 con mejoras de rendimiento' // Historial de cambios
    }
  ];

  wireframeVisible: boolean = false;
  wireframe = [
    {
      nombre: 'Wireframe de Inicio', // Nombre del wireframe
      enlace: 'https://example.com/wireframe-inicio', // Enlace al wireframe (opcional)
      descripcion: 'Wireframe de la página de inicio del proyecto', // Descripción breve
      fechaCreacion: '2023-10-01', // Fecha de creación
      responsable: 'Juan Pérez', // Responsable del wireframe
      estado: 'Aprobado', // Estado del wireframe (Borrador, Revisión, Aprobado, etc.)
      comentarios: 'Revisado y aprobado por el equipo de diseño' // Comentarios adicionales (opcional)
    }
  ]

  databaseVisible: boolean = false;
  database = [
    {
      nombre: '', // Nombre de la base de datos (Ejemplo: crm_db, usuarios_prod, logs_app)
      tipo: '', // Tipo de base de datos (SQL, NoSQL, NewSQL, GraphDB, etc.)
      motor: '', // Motor de base de datos (Ejemplo: PostgreSQL, MySQL, MongoDB, Redis, etc.)
      version: '', // Versión actual (Ejemplo: PostgreSQL 16, MongoDB 6.0)
      servidor: '', // Servidor o ubicación (Dónde está alojada: AWS RDS, local, DigitalOcean, etc.)
      ambiente: '', // Ambiente (Producción, Desarrollo, Staging, QA)
      repositorioRelacionado: '', // Repositorio relacionado (Si hay un repositorio de migraciones o estructura)
      urlConexion: '', // URL de conexión (Opcional, dependiendo de la seguridad)
      esquemaDatos: '', // Esquema de datos (Enlace a diagramas o documentación de la estructura)
      usuariosAcceso: '', // Usuarios con acceso (Lista de roles y permisos)
      metodoAutenticacion: '', // Método de autenticación (Contraseña, IAM, OAuth, SSL, etc.)
      frecuenciaRespaldo: '', // Frecuencia de respaldo (Diario, Semanal, Manual, Automático)
      ubicacionRespaldo: '', // Ubicación de los respaldos (Dónde se almacenan los backups)
      integraciones: '', // Integraciones (Servicios que la utilizan, APIs conectadas)
      capacidadAlmacenamiento: '', // Capacidad de almacenamiento (Límite actual y espacio utilizado)
      historialCambios: '', // Historial de cambios (Últimas modificaciones en la estructura)
      estado: '', // Estado actual (Activa, En mantenimiento, Decomisionada)
      retencionDatos: '', // Tiempo estimado de retención de datos (Ejemplo: 1 año, 5 años, indefinido)
      estrategiaEscalabilidad: '', // Estrategia de escalabilidad (Sharding, Replicación, Particionamiento, etc.)
      observaciones: '' // Observaciones o notas adicionales
    }
  ]

  frontendVisible: boolean = false;
  frontend: any[] = [];


  backendVisible: boolean = false;
  backend: any[] = [];

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      entrega: ['', [Validators.required]],
      frontend: this.fb.array([]),
      backend: this.fb.array([]),
    });
  }

  //repositorio

  addRepositorio(): void {
    this.repoVisible = true;
  }

  closeRepo(): void {
    this.repoVisible = false;
  }


  //despliegue

  addDespliegue(): void {
    this.despliegueVisible = true;
  }

  closeDespliegue(): void {
    this.despliegueVisible = false;
  }

  //Tecnologias

  addTecnologia(): void {
    this.tecnologiaVisible = true;
  }

  closeTecnologia(): void {
    this.tecnologiaVisible = false;
  }

  // wireframe
  closeWireframe(): void {
    this.wireframeVisible = false;
  }

  addWireframe(): void {
    this.wireframeVisible = true;
  }
  
  // database
  closeDatabase(): void {
    this.databaseVisible = false;
  }

  addDatabase(): void {
    this.databaseVisible = true;
  }

  //frontend
  closeFrontend(): void {
    this.frontendVisible = false;
  }

  addFrontend(): void {
    this.frontendVisible = true;
  }

  //backend
  closeBackend(): void {
    this.backendVisible = false;
  } 

  addBackend(): void {
    this.backendVisible = true;
  }









  onSubmit(): void {
    if (this.clientForm.valid) {
      console.log('Form Submitted', this.clientForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
