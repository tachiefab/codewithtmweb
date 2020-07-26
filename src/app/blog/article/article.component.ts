import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from './../../core/services/blog/blog.service';
import { HeaderService } from 'src/app/core/services/blog/headerService';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
	private req: any;
  private routeSub:any;
  article: any = {};
  relatedArticles: any;
  slug:string;

  bootstrapClass = 'header background-2'
  headerBack: boolean = false;
  sideBar: boolean = true;

  constructor(
            private route: ActivatedRoute, 
            private blogService:BlogService, 
            private headerService: HeaderService
            ) { 
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
        
      })
  })
  }

  ngOnInit(): void {
    this.headerService.sendBootstrapClass(this.bootstrapClass);
    this.headerService.sendHeaderBack(this.headerBack);
    this.headerService.sendsideBar(this.sideBar)
  }

}
