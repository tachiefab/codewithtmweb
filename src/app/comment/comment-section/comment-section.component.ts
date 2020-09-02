import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommentService } from './../../core/services/comment/comment.service';
import { HeaderService } from 'src/app/core/services/blog/headerService';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  private req: any;
  private routeSub:any;
   nextUrl:string;
  comments: any;
  relatedArticles: any;
  slug:string;


  constructor(
            private route: ActivatedRoute, 
            private commentService:CommentService,
            private headerService: HeaderService
            ){
    this.getArticleComments();
   }

  getArticleComments = () => {
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      this.req = this.commentService.getAll(this.slug).subscribe(data=>{
      this.comments = data.results;
      this.nextUrl = data.next;
      })
  })
  }

  getNextPosts = (url) => {
    this.commentService.getNext(url).subscribe(
      data => {
        // add newly fetched posts to the existing post
        this.comments = this.comments.concat(data.results);
        this.nextUrl = data.next;
        
      },
      error => {
        console.log(error);
      }
    );
  }

  articleCommentCount(commentCount) {
    this.headerService.sendCommentCount(commentCount);
  }

  commentCreated(comment) {
    this.comments.unshift(comment);
  }

  loadMore() {
    if (this.nextUrl) {
      this.getNextPosts(this.nextUrl);
     }
    }

  ngOnInit(): void {
  }

}
