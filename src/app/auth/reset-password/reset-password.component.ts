import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/core/services/blog/headerService';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
 resetPasswordForm: FormGroup;
 darkTheme: boolean = true;

  constructor(
    private authService: AuthService, 
    private formBuilder: FormBuilder, 
    private headerService: HeaderService,
    private router: Router
    ) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['']
    });

       // sending some conditions to app component
       this.headerService.sendHasDarkTheme(this.darkTheme);
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
        this.router.navigate(['/auth']);
      }
    });
  }

}

