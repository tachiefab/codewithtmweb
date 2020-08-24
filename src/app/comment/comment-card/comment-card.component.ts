import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
  @Input('comment') comment;
  replies: any;
  isReply: boolean = false;
  parentCommentId:number;

  constructor() {
    
   }
 
  getCommentReplies = () => {
    this.replies = this.comment.replies
  }

  replyClicked = () => {
    if(this.isReply===false){
      this.isReply = true;
      this.parentCommentId = this.comment.id
    }else{
      this.isReply = false;
    }
  }

  replyCommentCreated(reply) {
    this.replies.unshift(reply);
  }

  ngOnInit(): void {
    this.getCommentReplies()
  }
  

}
