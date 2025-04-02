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
    DocTecTecnologiaComponent
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

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      fullNameOrCompany: ['', [Validators.required, Validators.minLength(3)]],
      descripcionGeneral: ['', [Validators.required]],
      funcionalidades: ['', [Validators.required]],
      documentacion: ['', [Validators.required]],
      entrega: ['', [Validators.required]],

      wireframe: this.fb.array([]),
      database: this.fb.array([]),
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


  get wireframe(): FormArray {
    return this.clientForm.get('wireframe') as FormArray;  
  }
  removeWireframe(index: number): void {
    const wire = this.clientForm.get('wireframe') as FormArray; 
    if (wire.length > 0) {
      wire.removeAt(index);
    }
  }
  addWireframe(): void {
    const wire = this.clientForm.get('wireframe') as FormArray;
    wire.push(this.fb.group({
      nombre: ['', [Validators.required]], // Nombre del wireframe
      enlace: ['', [Validators.pattern('https?://.+')]], // Enlace al wireframe (opcional)
      descripcion: ['', [Validators.required]], // Descripción breve
      fechaCreacion: ['', [Validators.required]], // Fecha de creación
      responsable: ['', [Validators.required]], // Responsable del wireframe
      estado: ['', [Validators.required]], // Estado del wireframe (Borrador, Revisión, Aprobado, etc.)
      comentarios: [''] // Comentarios adicionales (opcional)
    }));
  }

  get database(): FormArray {
    return this.clientForm.get('database') as FormArray;  
  }
  removeDatabase(index: number): void {
    const db = this.clientForm.get('database') as FormArray; 
    if (db.length > 0) {
      db.removeAt(index);
    }
  }
  addDatabase(): void {
    const db = this.clientForm.get('database') as FormArray;
    db.push(this.fb.group({
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
    }));
  }

  get frontend(): FormArray {
    return this.clientForm.get('frontend') as FormArray;  
  }

  removeFrontend(index: number): void {
    const front = this.clientForm.get('frontend') as FormArray; 
    if (front.length > 0) {
      front.removeAt(index);
    }
  }
  addFrontend(): void {
    const front = this.clientForm.get('frontend') as FormArray;
    front.push(this.fb.group({
      // 📌 Información General
      nombreProyecto: ['', [Validators.required]], // Nombre del proyecto (Ejemplo: CRM para documentación de software)
      framework: ['', [Validators.required]], // Framework o tecnología principal (Ejemplo: Angular, React, Vue.js, Svelte)
      versionActual: ['', [Validators.required]], // Versión actual (Ejemplo: Angular 17, React 18, Vue 3)
      lenguajeProgramacion: ['', [Validators.required]], // Lenguaje de programación (Ejemplo: TypeScript, JavaScript)
      repositorioFrontend: ['', [Validators.pattern('https?://.+')]], // Repositorio del frontend (Enlace al repo en GitHub, GitLab, etc.)
      branchPrincipal: ['', [Validators.required]], // Branch principal (Ejemplo: main, develop)
      arquitectura: ['', [Validators.required]], // Arquitectura (Ejemplo: SPA, SSR, SSG, PWA, Microfrontend)
      patronesDiseno: ['', [Validators.required]], // Patrones de diseño utilizados (Ejemplo: Atomic Design, Redux, MVVM, Component-Based Architecture)

      // 🔗 Conectividad e Integraciones
      baseDatos: ['', [Validators.required]], // Base de datos utilizada (Si el frontend interactúa directamente con IndexedDB, Firebase Firestore, etc.)
      serviciosExternos: ['', [Validators.required]], // Servicios externos integrados (Ejemplo: Stripe, Firebase, Google Maps, Sentry, Hotjar)
      proveedoresAutenticacion: ['', [Validators.required]], // Proveedores de autenticación (Ejemplo: Firebase Auth, OAuth2, Auth0, Keycloak)
      apisConsumidas: ['', [Validators.required]], // APIs consumidas (REST, GraphQL, WebSockets)
      manejoEstado: ['', [Validators.required]], // Manejo de estado (Ejemplo: Redux, NgRx, Vuex, Zustand, Recoil)
      protocolosComunicacion: ['', [Validators.required]], // Protocolos de comunicación (Ejemplo: HTTP, WebSockets, MQTT)

      // ⚙️ Despliegue y Configuración
      urlProduccion: ['', [Validators.pattern('https?://.+')]], // URL del frontend en producción (Ejemplo: https://miapp.com)
      ambientes: ['', [Validators.required]], // Ambientes (Producción, Staging, Desarrollo, QA)
      infraestructuraHosting: ['', [Validators.required]], // Infraestructura de hosting (Ejemplo: Vercel, Netlify, Firebase Hosting, AWS S3 + CloudFront)
      contenedoresOrquestacion: ['', [Validators.required]], // Contenedores y orquestación (Ejemplo: Docker, Kubernetes)
      ciCd: ['', [Validators.required]], // CI/CD (Ejemplo: GitHub Actions, GitLab CI, Jenkins)
      variablesEntorno: ['', [Validators.required]], // Variables de entorno necesarias (.env con claves API, configuración de endpoints, etc.)

      // 🛡️ Seguridad y Mantenimiento
      estrategiasAutenticacion: ['', [Validators.required]], // Estrategias de autenticación y autorización (Ejemplo: OAuth2, JWT, Session-based Auth)
      manejoLogsMonitoreo: ['', [Validators.required]], // Manejo de logs y monitoreo (Ejemplo: Sentry, LogRocket, New Relic, Datadog)
      estrategiaBackup: ['', [Validators.required]], // Estrategia de backup y recuperación (En caso de usar almacenamiento local como IndexedDB o Firebase)
      limitesTasa: ['', [Validators.required]], // Límites de tasa (Rate limiting) (Ejemplo: Implementación en API Gateway o middleware)
      historialCambios: [''], // Historial de cambios y versiones

      // 🧪 Pruebas y Calidad
      frameworkPruebasUnitarias: ['', [Validators.required]], // Framework de pruebas unitarias (Ejemplo: Jest, Vitest, Mocha)
      pruebasComponentes: ['', [Validators.required]], // Pruebas de componentes (Ejemplo: React Testing Library, Angular Testing Library)
      pruebasEndToEnd: ['', [Validators.required]], // Pruebas end-to-end (E2E) (Ejemplo: Cypress, Playwright, Selenium)
      pruebasRendimiento: ['', [Validators.required]], // Pruebas de rendimiento (Ejemplo: Lighthouse, WebPageTest)

      // 📜 Extras Opcionales
      documentacionUiUx: ['', [Validators.pattern('https?://.+')]], // Documentación de UI/UX (Ejemplo: Figma, Storybook, Zeplin)
      convencionesCodigo: ['', [Validators.required]], // Convenciones de código y estilo (Ejemplo: ESLint, Prettier, Stylelint)
      accesibilidad: ['', [Validators.required]], // Accesibilidad (Ejemplo: WCAG Compliance, axe-core)
      problemasComunes: [''], // Problemas comunes y soluciones
      planEscalabilidad: [''] // Plan de escalabilidad (Ejemplo: Code-splitting, Lazy loading, CDN, Service Workers)
    }));
  }

  get backend(): FormArray {
    return this.clientForm.get('backend') as FormArray;  
  }
  removeBackend(index: number): void {
    const back = this.clientForm.get('backend') as FormArray; 
    if (back.length > 0) {
      back.removeAt(index);
    }
  }
 
  addBackend(): void {
    const back = this.clientForm.get('backend') as FormArray;
    back.push(this.fb.group({
      // 📌 Información General
      nombreProyecto: ['', [Validators.required]], // Nombre del proyecto (Ejemplo: CRM para documentación de software)
      framework: ['', [Validators.required]], // Framework o tecnología principal (Ejemplo: Nest.js, Express.js, Spring Boot, Django, Laravel)
      versionActual: ['', [Validators.required]], // Versión actual (Ejemplo: Nest.js 10, Django 4.2)
      lenguajeProgramacion: ['', [Validators.required]], // Lenguaje de programación (Ejemplo: TypeScript, JavaScript, Python, Java)
      repositorioBackend: ['', [Validators.pattern('https?://.+')]], // Repositorio del backend (Enlace al repo en GitHub, GitLab, etc.)
      branchPrincipal: ['', [Validators.required]], // Branch principal (Ejemplo: main, develop)
      arquitectura: ['', [Validators.required]], // Arquitectura (Ejemplo: Monolito, Microservicios, Serverless, CQRS)
      patronesDiseno: ['', [Validators.required]], // Patrones de diseño utilizados (Ejemplo: MVC, Repository Pattern, Clean Architecture)

      // 🔗 Conectividad e Integraciones
      baseDatos: ['', [Validators.required]], // Base de datos utilizada (Ejemplo: PostgreSQL, MongoDB, Firebase)
      orm: ['', [Validators.required]], // ORM o herramienta de acceso a datos (Ejemplo: TypeORM, Prisma, Sequelize, Mongoose)
      serviciosExternos: ['', [Validators.required]], // Servicios externos integrados (Ejemplo: Stripe, Firebase, SendGrid, AWS S3)
      proveedoresAutenticacion: ['', [Validators.required]], // Proveedores de autenticación (Ejemplo: JWT, OAuth2, Firebase Auth, Keycloak)
      apis: ['', [Validators.required]], // APIs utilizadas o expuestas (REST, GraphQL, gRPC, WebSockets)
      endpointsPrincipales: ['', [Validators.required]], // Endpoints principales (Lista de rutas críticas con documentación)
      protocolosComunicacion: ['', [Validators.required]], // Protocolos de comunicación (Ejemplo: HTTP, WebSockets, MQTT)
      manejoColasEventos: ['', [Validators.required]], // Manejo de colas y eventos (Ejemplo: RabbitMQ, Kafka, Redis Pub/Sub)

      // ⚙️ Despliegue y Configuración
      urlProduccion: ['', [Validators.pattern('https?://.+')]], // URL del backend en producción (Ejemplo: https://api.miapp.com)
      ambientes: ['', [Validators.required]], // Ambientes (Producción, Staging, Desarrollo, QA)
      infraestructuraHosting: ['', [Validators.required]], // Infraestructura de hosting (Ejemplo: AWS EC2, Heroku, DigitalOcean, Vercel, Firebase Functions)
      contenedoresOrquestacion: ['', [Validators.required]], // Contenedores y orquestación (Ejemplo: Docker, Kubernetes, AWS Fargate)
      ciCd: ['', [Validators.required]], // CI/CD (Ejemplo: GitHub Actions, GitLab CI, Jenkins)
      variablesEntorno: ['', [Validators.required]], // Variables de entorno necesarias (.env con claves API, credenciales de BD, etc.)

      // 🛡️ Seguridad y Mantenimiento
      estrategiasAutenticacion: ['', [Validators.required]], // Estrategias de autenticación y autorización (JWT, OAuth2, RBAC, ACL)
      manejoLogsMonitoreo: ['', [Validators.required]], // Manejo de logs y monitoreo (Ejemplo: Winston, Datadog, Prometheus, New Relic)
      estrategiaBackup: ['', [Validators.required]], // Estrategia de backup y recuperación (Ejemplo: Snapshots en AWS, backups de BD)
      limitesTasa: ['', [Validators.required]], // Límites de tasa (Rate limiting) (Ejemplo: Redis con express-rate-limit)
      historialCambios: [''], // Historial de cambios y versiones

      // 🧪 Pruebas y Calidad
      frameworkPruebasUnitarias: ['', [Validators.required]], // Framework de pruebas unitarias (Ejemplo: Jest, Mocha, PyTest)
      pruebasEndToEnd: ['', [Validators.required]], // Pruebas end-to-end (E2E) (Ejemplo: Cypress, Playwright)
      pruebasCargaEstres: ['', [Validators.required]], // Pruebas de carga y estrés (Ejemplo: k6, JMeter)

      // 📜 Extras Opcionales
      documentacionApi: ['', [Validators.pattern('https?://.+')]], // Documentación API (Swagger, Postman, Redoc)
      convencionesCodigo: ['', [Validators.required]], // Convenciones de código y estilo (Ejemplo: ESLint, Prettier, PEP8)
      problemasComunes: [''], // Problemas comunes y soluciones
      planEscalabilidad: [''] // Plan de escalabilidad (Sharding, Clustering, CDN, Edge Functions)
    }));
  }









  onSubmit(): void {
    if (this.clientForm.valid) {
      console.log('Form Submitted', this.clientForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
