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
  relatedArticles: any;
  slug:string;

  constructor(private route: ActivatedRoute, private blogService:BlogService) { 
    this.getArticle();
    this.getRelatedArticles()
  }

  getArticle = () => {
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      this.req = this.blogService.getOne(this.slug).subscribe(data=>{
        this.article = data as any
      })
  })
  }

  getRelatedArticles = () => {
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      this.req = this.blogService.getRelated(this.slug).subscribe(data=>{
        this.relatedArticles = data.results as any
        console.log(this.relatedArticles)
      })
  })
  }

  ngOnInit(): void {
  }

}
