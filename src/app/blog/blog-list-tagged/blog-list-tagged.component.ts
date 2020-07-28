import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../core/services/blog/blog.service';
import { BlogInternalService } from '../services/blog-internal.service';
import { HeaderService } from 'src/app/core/services/blog/headerService';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListTaggedComponent implements OnInit {
  postList : any;
  private req: any;
  headerInfo : any;
  bootstrapClass = 'header header-over large'
  headerBack: boolean = true;
  sideBar: boolean = true;
  isMainPage: boolean = true;

  constructor(
          private blogService:BlogService,
          private logInternalService:BlogInternalService,
          private headerService: HeaderService
          ) {
    this.getPosts();
   }

   
   getPosts = () => {
    this.blogService.getAll('/').subscribe(
      data => {
        this.postList = data.results;
      },
      error => {
        console.log(error);
      }
    );
  }

  

  ngOnInit(): void {
    this.req = this.logInternalService.getBlogListHeader().subscribe(data=>{
      this.headerInfo = data[0];
      this.headerService.sendHeaderInfo(this.headerInfo);
      this.headerService.sendisMainPage(this.isMainPage);
      this.headerService.sendBootstrapClass(this.bootstrapClass);
      this.headerService.sendHeaderBack(this.headerBack);
      this.headerService.sendsideBar(this.sideBar)
    })
  }

}
