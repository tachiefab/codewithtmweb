import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommentService } from './../../core/services/comment/comment.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  private req: any;
  private routeSub:any;
  comments: any;
  relatedArticles: any;
  slug:string;


  constructor(
            private route: ActivatedRoute, 
            private commentService:CommentService
            ){
    this.getArticleComments();
   }

  getArticleComments = () => {
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      this.req = this.commentService.getAll(this.slug).subscribe(data=>{
      this.comments = data.results as any
      })
  })
  }

  commentCreated(comment) {
    this.comments.push(comment);
  }

  ngOnInit(): void {
  }

}
