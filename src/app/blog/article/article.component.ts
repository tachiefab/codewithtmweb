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
  likes_count:number;
  commentCount={content: 0}
  tagList : any;
  relatedArticles: any;
  slug:string;
  bootstrapClass = 'header background-2'
  headerBack: boolean = false;
  sideBar: boolean = true;
  whiteTheme: boolean = true;

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
        this.likes_count = this.article.likes_count
        this.commentCount.content = this.article.comment_count
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

  likeToggle = () => {
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      this.req = this.blogService.LikeOne(this.slug).subscribe(data=>{
        this.likes_count = data.likes_count;
        this.article.did_like = !this.article.did_like;
      })
  })
  }

  ngOnInit(): void {
    this.headerService.sendBootstrapClass(this.bootstrapClass);
    this.headerService.sendHeaderBack(this.headerBack);
    this.headerService.sendsideBar(this.sideBar)
    this.headerService.sendHasWhiteTheme(this.whiteTheme)
    // updating comment count when ever a comment is created
    this.headerService.commentCountCast.subscribe(content=> this.commentCount = content);
 
  }

}
