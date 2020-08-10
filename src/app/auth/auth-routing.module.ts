import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const routes: Routes = [

  {
    path: '', 
    component: LoginPageComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'register', 
    component: RegisterPageComponent,
  },

  {
    path: 'reset-password', 
    component: ResetPasswordComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

