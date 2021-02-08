import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from './../../core/services/blog/blog.service';
import { BlogInternalService } from './../services/blog-internal.service';
import { HeaderService } from '../../core/services/blog/headerService';
// import { HeaderService } from 'src/app/core/services/blog/headerService';

@Component({
  selector: 'app-blog-list-tagged',
  templateUrl: './blog-list-tagged.component.html',
  styleUrls: ['./blog-list-tagged.component.css']
})
export class BlogListTaggedComponent implements OnInit {
  private req: any;
  private routeSub:any;
  nextUrl:string;
  slug:string;
  postList : any;
  headerInfo : any;
  darkTheme: boolean = true;

  constructor(
    private route: ActivatedRoute, 
          private blogService:BlogService,
          private logInternalService:BlogInternalService,
          private headerService: HeaderService
          ) {
    this.getPostsByCategory();
   }

   getPostsByCategory = () => {
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      this.req = this.blogService.getAll('/?tag=' + this.slug).subscribe(data=>{
        this.postList = data.results;
        this.nextUrl = data.next;
      })
  })
  }

  getNextPosts = (url) => {
    this.blogService.getNext(url).subscribe(
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
    this.req = this.logInternalService.getBlogListHeader().subscribe(data=>{
      this.headerInfo = data[0];
      this.headerService.sendHeaderInfo(this.headerInfo);
      this.headerService.sendHasDarkTheme(this.darkTheme);
    })
  }

}
