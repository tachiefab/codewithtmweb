import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

import { BlogService } from './../../core/services/blog/blog.service';
import { BlogInternalService } from './../services/blog-internal.service';
import { HeaderService } from 'src/app/core/services/blog/headerService';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  postList : any;
  private req: any;
	headerInfo : any;

  constructor(
          private sanitizer: DomSanitizer, 
          private blogService:BlogService,
          private logInternalService:BlogInternalService,
          private headerService: HeaderService
          ) {
    this.getPosts();
   }


   getPosts = () => {
    this.blogService.getAll().subscribe(
      data => {
        this.postList = data.results;
        // console.log(data)
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.req = this.logInternalService.getBlogListHeader().subscribe(data=>{
      this.headerInfo = data[0];
      this.headerService.sendMessage(this.headerInfo);
    })
  }

}
