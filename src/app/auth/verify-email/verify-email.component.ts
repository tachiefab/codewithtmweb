import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  token:string;
  private req: any;
  private routeSub:any;

  
  constructor(
    private authService: AuthService, 
    private router: Router,
    private route: ActivatedRoute, 
    ) { 
      this.verifyEmail()
    }

  ngOnInit(): void {
  }

  verifyEmail = () => {
    this.routeSub = this.route.params.subscribe(params => {
      this.token = params['token']
      this.req = this.authService.emailVerification(this.token).subscribe(data=>{
        this.router.navigate(['/auth']);
      })
  })
  }

}
