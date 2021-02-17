import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from './../../core/services/blog/blog.service';
import { HeaderService } from '../../core/services/blog/headerService';
import { AuthUserService } from '../../shared/utility/authUser.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  isLoggedIn: boolean = false;
	private req: any;
  private routeSub:any;
  article: any = {};
  likes_count:number;
  commentCount={content: 0}
  tagList : any;
  relatedArticles: any;
  slug:string;
  darkTheme: boolean = true;

  constructor(
            private route: ActivatedRoute, 
            private blogService:BlogService, 
            private headerService: HeaderService, 
            private userAuthService:AuthUserService,
             private router: Router
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
     // checking if user is authenticated
     const token = this.userAuthService.isLoggedIn();
     if (token) {
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      this.req = this.blogService.LikeOne(this.slug).subscribe(data=>{
        this.likes_count = data.likes_count;
        this.article.did_like = !this.article.did_like;
      })
  })
}else{
  this.router.navigate(['/auth']);
}
  }

  ngOnInit(): void {
    this.headerService.sendHasDarkTheme(this.darkTheme);
    // updating comment count when ever a comment is created
    this.headerService.commentCountCast.subscribe(content=> this.commentCount = content);
  }

}
