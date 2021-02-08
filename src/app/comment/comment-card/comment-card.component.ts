import { Component, OnInit, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommentService } from 'src/app/core/services/comment/comment.service';
import { AuthUserService } from 'src/app/shared/utility/authUser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
  isLoggedIn: boolean = false;
  @Input('comment') comment;
  private req: any;
  likes_count:number;
  replyCount:number;
  totalCount:number;
  commentReplyCount:any;
  replies: any;
  isReply: boolean = false;
  parentCommentId:number;

  constructor(
            private commentService:CommentService, 
            private userAuthService:AuthUserService,
            private router: Router
             ) {}
 
  getCommentReplies = () => {
    this.replies = this.comment.replies
    this.likes_count = this.comment.likes_count
  }

  getReplyCount = () => {
    this.replyCount = this.comment.reply_count;
    if(this.replyCount > 1){
      this.commentReplyCount = this.replyCount + " replies";
    }else if(this.replyCount <= 0){
      this.commentReplyCount = "No replies";
    }else{
      this.commentReplyCount = this.replyCount + " reply";
    }
  }

  replyClicked = () => {
    if(this.isReply===false){
      this.isReply = true;
      this.parentCommentId = this.comment.id
      // alert(this.parentCommentId)
    }else{
      this.isReply = false;
    }
  }

  replyCommentCreated(reply) {
    this.replies.unshift(reply);
    this.getReplyCount();
  }

  
  likeToggle = () => {
    // checking if user is authenticated
    const token = this.userAuthService.isLoggedIn();
    if (token) {
      this.isLoggedIn = token;
      this.req = this.commentService.LikeOne(this.comment.id).subscribe(data=>{
        this.likes_count = data.likes_count;
        this.comment.did_like = !this.comment.did_like;
      })
    }else{
      this.router.navigate(['/auth']);
    }
    
  }

  ngOnInit(): void {
    this.getCommentReplies();
    this.getReplyCount();
  }
  

}
