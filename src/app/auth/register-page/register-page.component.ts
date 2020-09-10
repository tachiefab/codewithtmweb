import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { HeaderService } from 'src/app/core/services/blog/headerService';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  whiteTheme: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private authService: AuthService, 
    private formBuilder: FormBuilder, 
    private headerService: HeaderService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [''],
      email: [''],
      password: [''],
      password2: ['']
    });

      // sending some conditions to app component
      this.headerService.sendHasWhiteTheme(this.whiteTheme);
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
        this.router.navigate(['/auth']);
      }
    });
  }

}

