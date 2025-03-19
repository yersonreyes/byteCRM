import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ButtonModule,PasswordModule,ReactiveFormsModule,InputTextModule, CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent implements OnInit  {
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }
}
