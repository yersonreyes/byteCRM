import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-new-password',
  imports: [ButtonModule,PasswordModule,ReactiveFormsModule,InputTextModule, CommonModule],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.sass'
})
export class NewPasswordComponent {
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      password: new FormControl(),
      password2: new FormControl()
    });
  }
}
