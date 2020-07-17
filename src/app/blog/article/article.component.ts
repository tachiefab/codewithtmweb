import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from './../../core/services/blog/blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
	private req: any;
  private routeSub:any;
  article: any;
  slug:string;
  ID: number;

  constructor(private route: ActivatedRoute, private blogService:BlogService) { 
    this.getArticle();
  }

  getArticle = () => {
    this.routeSub = this.route.params.subscribe(params => {
      // this.slug = params['slug']
      this.ID = params['ID']
      this.req = this.blogService.getOne(this.ID).subscribe(data=>{
        this.article = data as any
      })
  })
  }

  ngOnInit(): void {
  }

}
