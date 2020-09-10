import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/shared/utility/authUser.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(
          private userAuthService:AuthUserService,
          private authService: AuthService,
          private router: Router
          ) { 
            // checking if user is logged in
            this.isLoggedIn = this.userAuthService.isLoggedIn();
  }

  logout() {
    this.authService.removeTokens();
    this.router.navigate(['/blog']);
    }

  ngOnInit(): void {
  }

}
