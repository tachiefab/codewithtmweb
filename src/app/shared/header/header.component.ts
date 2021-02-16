import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from './../utility/authUser.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { HeaderService } from 'src/app/core/services/blog/headerService';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  notificationList : any;
  notificationCount: number;

  constructor(
          private userAuthService:AuthUserService,
          private authService: AuthService,
          private router: Router,
          private headerService: HeaderService,
          private notificationService:NotificationService,
          ) { 
            // checking if user is logged in
            this.isLoggedIn = this.userAuthService.isLoggedIn();
            // getting users notifications
            this.getNotifications();
  }

  getNotifications = () => {
    this.notificationService.getAll().subscribe(
      data => {
        this.notificationList = data.results;
        this.notificationCount = data.count;
      },
      error => {
        console.log(error);
      }
    );
  }

  logout() {
    this.authService.removeTokens();
    this.router.navigate(['/blog']);
    }

  ngOnInit(): void {
  }

}
