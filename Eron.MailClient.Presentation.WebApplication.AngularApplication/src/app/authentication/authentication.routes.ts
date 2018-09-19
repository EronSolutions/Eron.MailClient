import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ForgetPasswordResponseComponent } from './forgetPassword/forget-password-response/forget-password-response.component';
import { ForgetPasswordRequestComponent } from './forgetPassword/forget-password-request/forget-password-request.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetPasswordRequestComponent },
  {
    path: 'forgetpassword/code/:code',
    component: ForgetPasswordResponseComponent
  },
  {path: '', redirectTo: 'login'}
  // ,
  // { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
  public AuthenticationModuleRoutes = routes[0];
}

