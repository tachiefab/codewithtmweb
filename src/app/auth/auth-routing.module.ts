import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NewPasswordRedirectComponentComponent } from './new-password-redirect-component/new-password-redirect-component.component';


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

  {
    path: 'very-email/:token', 
    component: VerifyEmailComponent,
  },

  {
    path: 'password-reset/:uidb64/:token', 
    component: NewPasswordRedirectComponentComponent,
  },

];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

