import { Component, OnInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { HeaderService } from 'src/app/core/services/blog/headerService';

// third party
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;
  loginForm: FormGroup;
  darkTheme: boolean = true;

  constructor(
    private authService: AuthService, 
    private formBuilder: FormBuilder, 
    private headerService: HeaderService,
    private router: Router,
    private toastrService: ToastrService
    ) {
  // sending some conditions to app component
  this.headerService.sendHasDarkTheme(this.darkTheme);
     }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });

    // toast container
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
     return this.loginForm.controls; 
    }

  login() {
    this.authService.login(
      {
        username: this.f.username.value,
        password: this.f.password.value
      }
    )
    .subscribe(
      success => {
        if (success) {
          this.router.navigate(['/profile']);
        }else{
          this.toastrService.error('There is no active account with this credentials.', 'Invalid credentials');
        }
    }
    );
  }
  

}

