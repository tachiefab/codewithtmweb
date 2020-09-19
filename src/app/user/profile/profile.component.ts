import { ProfileService } from './../../core/services/user/profile.service';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/blog/headerService';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  postList : any;
  nextUrl:string;
  darkTheme: boolean = true;
  username:string;

  constructor(
          private headerService: HeaderService, 
          private profileService:ProfileService
          ) {
        this.getUserLikedPosts();
    }

  getUserLikedPosts = () => {
    this.username = localStorage.getItem('USERNAME');
    this.profileService.getAll(this.username).subscribe(
      data => {
        this.postList = data.results;
        this.nextUrl = data.next;
        
      },
      error => {
        console.log(error);
      }
    );
  }

  getNextPosts = (url) => {
    this.profileService.getNext(url).subscribe(
      data => {
        // add newly fetched posts to the existing post
        this.postList = this.postList.concat(data.results);
        this.nextUrl = data.next;
        
      },
      error => {
        console.log(error);
      }
    );
  }

  loadMore() {
    if (this.nextUrl) {
      this.getNextPosts(this.nextUrl);
      }
    }

  ngOnInit(): void {
    this.headerService.sendHasDarkTheme(this.darkTheme);
  }

}
