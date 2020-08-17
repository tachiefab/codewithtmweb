import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthService } from './../core/services/auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptor } from './token.interceptor';
import { SharedModule } from './../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NewPasswordRedirectComponentComponent } from './new-password-redirect-component/new-password-redirect-component.component';




@NgModule({
  declarations: [
              LoginPageComponent, 
              RegisterPageComponent, 
              ResetPasswordComponent, 
              VerifyEmailComponent, 
              NewPasswordRedirectComponentComponent
            ],
  providers: [
            AuthGuard,
            AuthService,
            {
              provide: HTTP_INTERCEPTORS,
              useClass: TokenInterceptor,
              multi: true
            }
          ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
