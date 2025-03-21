import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-clients-new',
  imports: [ReactiveFormsModule, CommonModule,ButtonModule,InputTextModule, DividerModule ],
  templateUrl: './clients-new.component.html',
  styleUrl: './clients-new.component.sass'
})
export class ClientsNewComponent {

  clientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      fullNameOrCompany: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      businessDescription: ['', [Validators.required]],
     

      socialMedia: this.fb.group({
        facebook: [''],
        instagram: [''],
        linkedIn: [''],
        website: ['',],
      }),

      //agrega grupo para datos de facturacion en chile
      facturacion: this.fb.group({
        fullNameOrCompany: ['', [Validators.required, Validators.minLength(3)]],
        giro : ['', [Validators.required]],
        rut: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        address: ['', [Validators.required]],
        email: ['', [Validators.required]],
      }),


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
