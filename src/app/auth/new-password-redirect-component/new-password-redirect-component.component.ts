import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { HeaderService } from '../../core/services/blog/headerService';

@Component({
  selector: 'app-new-password-redirect-component',
  templateUrl: './new-password-redirect-component.component.html',
  styleUrls: ['./new-password-redirect-component.component.css']
})
export class NewPasswordRedirectComponentComponent implements OnInit {
  resetForm: FormGroup;
  darkTheme: boolean = true;
  token:string;
  uidb64:string;
  password: string;
  private req: any;
  private routeSub:any;

  
  constructor(
    private route: ActivatedRoute, 
    private authService: AuthService,
    private formBuilder: FormBuilder,  
    private headerService: HeaderService,
    private router: Router,
    ) { 
      this.setNewPassword()
    }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      password: ['']
    });

       // sending some conditions to app component
       this.headerService.sendHasDarkTheme(this.darkTheme);
  }

  get f() {
    return this.resetForm.controls; 
   }

  setNewPassword = () => {
    this.routeSub = this.route.params.subscribe(params => {
      this.uidb64 = params['uidb64']
      this.token = params['token']
      {
      password: this.f.password.value
      }
      this.req = this.authService.resetPassword(
        {
          uidb64:this.uidb64, 
          token:this.token, 
          password: this.f.password.value
        }
       
        ).subscribe(data=>{
        this.router.navigate(['/auth']);
      })
  })
  }

}
