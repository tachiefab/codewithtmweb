import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { BlogService } from './../../core/services/blog/blog.service';
import { BlogInternalService } from './../services/blog-internal.service';
import { HeaderService } from '../../core/services/blog/headerService';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  title = 'All blog list page';
  nextUrl:string;
  postList : any;
  private req: any;
  headerInfo : any;
  darkTheme: boolean = false;
  
  constructor(
          private titleService: Title,
          private metaTagService: Meta,
          private blogService:BlogService,
          private logInternalService:BlogInternalService,
          private headerService: HeaderService
          ) {

    this.getPosts();
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

   getPosts = () => {
    this.blogService.getAll('/').subscribe(
      data => {
        this.postList = data.results;
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

    
    
    // adding meta data
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'All blog list page' }
    );

    this.req = this.logInternalService.getBlogListHeader().subscribe(data=>{
      this.headerInfo = data[0];
      this.headerService.sendHeaderInfo(this.headerInfo);
      this.headerService.sendHasDarkTheme(this.darkTheme);
    })
  }

}
