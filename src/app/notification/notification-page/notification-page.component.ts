import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/blog/headerService';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.css']
})
export class NotificationPageComponent implements OnInit {
  notificationList : any;
  notificationCount:number;
  nextUrl:string;
  private req: any;
  // headerInfo : any;
  darkTheme: boolean = true;

  constructor(
            private notificationService:NotificationService,
            private headerService: HeaderService
            ) { 
              // this.getNotifications();
            }


  // getNextNotifications = (url) => {
  //   this.notificationService.getNext(url).subscribe(
  //     data => {
  //       // add newly fetched posts to the existing post
  //       this.notificationList = this.notificationList.concat(data.results);
  //       this.nextUrl = data.next;
        
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  //  getNotifications = () => {
  //   this.notificationService.getAll().subscribe(
  //     data => {
  //       this.notificationList = data.results;
  //       this.notificationCount = data.count;
  //       this.nextUrl = data.next;
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  loadMore() {
    console.log("loading more")
    // if (this.nextUrl) {
    //   this.getNextNotifications(this.nextUrl);
    //   }
    }

  ngOnInit(): void {
    this.headerService.sendHasDarkTheme(this.darkTheme);
  }

}
