import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth/auth.service';
import { HeaderService } from '../../core/services/blog/headerService';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;
  registerForm: FormGroup;
  darkTheme: boolean = true;

  constructor(
    private route: ActivatedRoute, 
    private authService: AuthService, 
    private formBuilder: FormBuilder, 
    private headerService: HeaderService,
    private router: Router,
    private toastrService: ToastrService
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [''],
      email: [''],
      password: [''],
      password2: ['']
    });

      // sending some conditions to app component
      this.headerService.sendHasDarkTheme(this.darkTheme);
      // toast container
      this.toastrService.overlayContainer = this.toastContainer;
  }

  get f() {
     return this.registerForm.controls; 
    }

  register() {
    this.authService.register(
      {
        username: this.f.username.value,
        email: this.f.email.value,
        password: this.f.password.value,
        password2: this.f.password2.value
      }
    )
    .subscribe(success => {
      if (success) {
        this.toastrService.success('Email activation link has been sent into your email.', 'Verify your email');
        // this.router.navigate(['/auth']);
      }else{
        this.toastrService.error('Please check your input and try again.', 'Account registration error.');
      }
    });
  }

}

