import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

 resetPasswordForm: FormGroup;

  constructor(
    private authService: AuthService, 
    private formBuilder: FormBuilder, 
    private router: Router
    ) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['']
    });
  }

  get f() {
     return this.resetPasswordForm.controls; 
    }

  register() {
    this.authService.register(
      {
        email: this.f.email.value
      }
    )
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/login']);
      }
    });
  }

}

