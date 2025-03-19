import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-recover-password',
  imports: [ButtonModule,PasswordModule,ReactiveFormsModule,InputTextModule, CommonModule,RouterLink,MessageModule],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.sass'
})
export class RecoverPasswordComponent {
  formGroup!: FormGroup;
  step = 1;

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  recoverPassword(){
    this.step = 2;
  }
}
