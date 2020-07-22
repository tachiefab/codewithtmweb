import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthorService } from './../services/author.service';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit {
  private req: any;
  private routeSub:any;
  author: any;
  // relatedArticles: any;
  id:number;

  constructor(private route: ActivatedRoute, private authorService:AuthorService)  { 
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
  }

}
