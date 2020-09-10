import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthorService } from './../services/author.service';
import { HeaderService } from 'src/app/core/services/blog/headerService';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit {
  private req: any;
  private routeSub:any;
  author: any;
  id:number;
  bootstrapClass = 'header background-2'
  headerBack: boolean = false;
  sideBar: boolean = true;
  whiteTheme: boolean = true;

  constructor(
          private route: ActivatedRoute, 
          private authorService:AuthorService, 
          private headerService: HeaderService
          )  { 
    this.getAuthor();
  }

  getAuthor = () => {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id']
      this.req = this.authorService.getOne(this.id).subscribe(data=>{
        this.author = data as any
      })
  })
  }

  ngOnInit(): void {
    this.headerService.sendBootstrapClass(this.bootstrapClass);
    this.headerService.sendHeaderBack(this.headerBack);
    this.headerService.sendsideBar(this.sideBar)
    this.headerService.sendHasWhiteTheme(this.whiteTheme)
  }

}
