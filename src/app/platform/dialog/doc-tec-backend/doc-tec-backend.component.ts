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
  selector: 'app-doc-tec-backend',
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
  templateUrl: './doc-tec-backend.component.html',
  styleUrl: './doc-tec-backend.component.sass'
})
export class DocTecBackendComponent {
  @Input() visible: boolean = true;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  
  repoForm: FormGroup;

  constructor(    private fb: FormBuilder) {
    this.repoForm = this.fb.group({
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
