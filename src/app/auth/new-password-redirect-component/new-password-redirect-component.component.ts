import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-password-redirect-component',
  templateUrl: './new-password-redirect-component.component.html',
  styleUrls: ['./new-password-redirect-component.component.css']
})
export class NewPasswordRedirectComponentComponent implements OnInit {
  token:string;
  uidb64:string;
  password: string;
  private req: any;
  private routeSub:any;

  
  constructor(
    private authService: AuthService, 
    private router: Router,
    private route: ActivatedRoute, 
    ) { 
      this.setNewPassword()
    }

  ngOnInit(): void {
  }

  setNewPassword = () => {
    this.routeSub = this.route.params.subscribe(params => {
      this.uidb64 = params['uidb64']
      this.token = params['token']
      this.password = 'tachiemusah4974'
      // console.log( this.uidb64,  this.token)
      this.req = this.authService.resetPassword(this.uidb64, this.token, this.password).subscribe(data=>{
        this.router.navigate(['/auth']);
      })
  })
  }

}
