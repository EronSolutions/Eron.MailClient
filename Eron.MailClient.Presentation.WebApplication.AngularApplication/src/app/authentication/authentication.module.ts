import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordRequestComponent } from './forgetPassword/forget-password-request/forget-password-request.component';
import { ForgetPasswordResponseComponent } from './forgetPassword/forget-password-response/forget-password-response.component';
import { AuthenticationRoutingModule } from './authentication.routes';
import { BaseModule } from '../base/base.module';

@NgModule({
  declarations: [LoginComponent, ForgetPasswordRequestComponent, ForgetPasswordResponseComponent],
  imports: [
    BaseModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule {}
