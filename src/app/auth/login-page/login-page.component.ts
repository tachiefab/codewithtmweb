import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { HeaderService } from 'src/app/core/services/blog/headerService';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  whiteTheme: boolean = false;

  constructor(
    private authService: AuthService, 
    private formBuilder: FormBuilder, 
    private headerService: HeaderService,
    private router: Router
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });

  // sending some conditions to app component
  this.headerService.sendHasWhiteTheme(this.whiteTheme);
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
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/profile']);
      }
    });
  }
  

}

