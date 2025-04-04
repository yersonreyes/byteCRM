import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-analisis-funcional',
  imports: [ReactiveFormsModule, CommonModule,ButtonModule,InputTextModule, DividerModule ,TextareaModule],
  templateUrl: './analisis-funcional.component.html',
  styleUrl: './analisis-funcional.component.sass'
})
export class AnalisisFuncionalComponent {
  clientForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      fullNameOrCompany: [''],
      client: [''],
      startDate: [''],
      endDate: [''],
      estatus: [''],
      descripcionGeneral: [''],
      funcionalidades: [''],
      alcances: [''],
      usuariosObjetivos: [''],
      casosDeUso: [''],
      requerimientosDelNegocio: [''],
      modulosPrincipales: [''],
      flujosDeNavegacion: [''],
      rolesPermisosUsuarios: [''],
      interaccionPlataforma: [''],
      tiposEntradaSalida: [''],
      validacionDatos: [''],
      reglasNegocio: [''],
      requisitosAccesibilidad: [''],
      requerimientoEsperado: [''],
      escalabilidad: [''],
      disponibilidad: [''],
      seguridad: [''],
      compatibilidad: [''],
      mantenimientoSoporte: [''],
      diagramaCasoUso: [''],
      diagramaFlujo: [''],
      diagramaEntidadRelacion: [''],
      prototipoWireframe: [''],
      historiaUsuario: [''],
      criteriosAceptacion: [''],
      kpi: [''],
      casoPruebaFuncionalidad: [''],
      fedbackUsuarioUsabilidad: [''],
      migracionDatos: [''],
      manejoErrores: [''],
      integracionErramientas: [''],
    });
  }


  onSubmit(): void {
    if (this.clientForm.valid) {
      console.log('Form Submitted', this.clientForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
