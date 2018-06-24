import { RecaptchaModule } from 'ng-recaptcha';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    SharedModule,
    RecaptchaModule.forRoot(),
  ],
  declarations: [LoginComponent, ForgotPassComponent, ResetPassComponent, RegisterComponent]
})
export class LoginModule { }
