import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-new-password-redirect-component',
  templateUrl: './new-password-redirect-component.component.html',
  styleUrls: ['./new-password-redirect-component.component.css']
})
export class NewPasswordRedirectComponentComponent implements OnInit {
  resetForm: FormGroup;
  token:string;
  uidb64:string;
  password: string;
  private req: any;
  private routeSub:any;

  
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,  
    private router: Router,
    private route: ActivatedRoute, 
    ) { 
      this.setNewPassword()
    }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      password: ['']
    });
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
