import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-proyects-new',
  imports: [ReactiveFormsModule, CommonModule,ButtonModule,InputTextModule, DividerModule ,TextareaModule],
  templateUrl: './proyects-new.component.html',
  styleUrl: './proyects-new.component.sass'
})
export class ProyectsNewComponent {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      fullNameOrCompany: ['', [Validators.required, Validators.minLength(3)]],
      client: ['', [Validators.required, Validators.minLength(3)]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      estatus: ['', [Validators.required]],
      descripcionGeneral: ['', [Validators.required]],
      funcionalidades: ['', [Validators.required]],
      documentacion: ['', [Validators.required]],
      entrega: ['', [Validators.required]],
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
