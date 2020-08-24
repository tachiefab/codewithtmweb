import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from './../../core/services/blog/blog.service';
import { HeaderService } from 'src/app/core/services/blog/headerService';
import { AuthUserService } from 'src/app/shared/utility/authUser.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
	private req: any;
  private routeSub:any;
  article: any = {};
  tagList : any;
  relatedArticles: any;
  slug:string;
  bootstrapClass = 'header background-2'
  headerBack: boolean = false;
  sideBar: boolean = true;

  constructor(
            private authUserService:AuthUserService,
            private route: ActivatedRoute, 
            private blogService:BlogService, 
            private headerService: HeaderService
            ) { 
    this.getArticle();
    this.getRelatedArticles();
    this.getArticleTags();
  }

  getArticle = () => {
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      this.req = this.blogService.getOne(this.slug).subscribe(data=>{
        this.article = data as any
      })
  })
  }

  getArticleTags = () => {
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      this.req = this.blogService.getItemTags(this.slug).subscribe(data=>{
      this.tagList = data.results;
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
