import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
  @Input('comment') comment;
  replies: any;

  constructor() {
    
   }
 
  getCommentReplies = () => {
    this.replies = this.comment.replies
  }

  

  ngOnInit(): void {
    this.getCommentReplies()
  }
  

}
