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
  selector: 'app-doc-tec-frontend',
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
  templateUrl: './doc-tec-frontend.component.html',
  styleUrl: './doc-tec-frontend.component.sass'
})
export class DocTecFrontendComponent {
  @Input() visible: boolean = true;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  
  repoForm: FormGroup;

  constructor(    private fb: FormBuilder) {
    this.repoForm = this.fb.group({
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
