import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
@Component({
  selector: 'app-clients-view',
  imports: [ReactiveFormsModule, CommonModule,ButtonModule,InputTextModule, DividerModule ,AccordionModule],
  templateUrl: './clients-view.component.html',
  styleUrl: './clients-view.component.sass'
})
export class ClientsViewComponent implements OnInit {

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

  ngOnInit(): void {
    // agrega datos al formulatio
    this.clientForm.patchValue({
      fullNameOrCompany: 'Juan Perez',
      email: 'example@123.com', 
      phone: '123456789',
      address: 'Av. Siempre Viva 123',
      industry: 'Tecnologia',
      businessDescription: 'Desarrollo de software',
      socialMedia: {
        facebook: 'https://facebook.com/juanperez',
        instagram: 'https://instagram.com/juanperez',
        linkedIn: 'https://linkedin.com/in/juanperez',
        website: 'https://juanperez.com',
      },
      facturacion: {
        fullNameOrCompany: 'Juan Perez',
        giro: 'Desarrollo de software',
        rut: '12345678-9',
        phone: '123456789',
        address: 'Av. Siempre Viva 123',
        email: 'example@123.com', 
      },    
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
