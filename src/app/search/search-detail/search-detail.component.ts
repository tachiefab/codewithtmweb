// import { BlogService } from './../../shared/services/blog.service';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/core/services/blog/headerService';
import { BlogService } from './../../core/services/blog/blog.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
  private req: any;
  private routeSub:any;
  query:string;
  nextUrl:string;
  postList : any;
  darkTheme: boolean = false;
  totalSearchResults:number;

  constructor(
    private route: ActivatedRoute, 
    private headerService: HeaderService, 
    private blogService:BlogService
   ) { }

  ngOnInit(): void {
    this.headerService.sendHasDarkTheme(this.darkTheme);
    // initializing search function
    this.search();
  }

  search = () => {
    this.routeSub = this.route.params.subscribe(params => {
      this.query = params['q']
      this.req = this.blogService.getAll('/?q=' + this.query).subscribe(data=>{
        this.postList = data.results;
        this.totalSearchResults = data.count;
        this.nextUrl = data.next;
      })
  })
  }

  
  getNextSearchResults = (url) => {
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
      this.getNextSearchResults(this.nextUrl);
      }
    }

}
