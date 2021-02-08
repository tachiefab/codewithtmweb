import { Component, OnInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { HeaderService } from '../../core/services/blog/headerService';

import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;
 resetPasswordForm: FormGroup;
 darkTheme: boolean = true;

  constructor(
    private authService: AuthService, 
    private formBuilder: FormBuilder, 
    private headerService: HeaderService,
    // private router: Router,
    private toastrService: ToastrService
    ) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['']
    });

       // sending some conditions to app component
       this.headerService.sendHasDarkTheme(this.darkTheme);

       // toast container
      this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
     return this.resetPasswordForm.controls; 
    }

    reset() {
    this.authService.requestPasswordResetEmail(
      {
        email: this.f.email.value
      }
    )
    .subscribe(success => {
      if (success) {
        this.toastrService.info('Email activation link has been sent into your email.', 'Verify your email');
        // this.router.navigate(['/auth']);
      }
    });
  }

}

