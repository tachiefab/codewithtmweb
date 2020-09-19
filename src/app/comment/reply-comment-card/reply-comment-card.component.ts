import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/core/services/comment/comment.service';
import { AuthUserService } from 'src/app/shared/utility/authUser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reply-comment-card',
  templateUrl: './reply-comment-card.component.html',
  styleUrls: ['./reply-comment-card.component.css']
})
export class ReplyCommentCardComponent implements OnInit {
  @Input('reply') reply;
  isLoggedIn: boolean = false;
  private req: any;
  likes_count:number;

  constructor(
            private commentService:CommentService, 
            private userAuthService:AuthUserService,
            private router: Router
    ) {}

  getLikesCount = () => {
    this.likes_count = this.reply.likes_count
  }

  likeToggle = () => {
     // checking if user is authenticated
     const token = this.userAuthService.isLoggedIn();
     if (token) {
    this.req = this.commentService.LikeOne(this.reply.id).subscribe(data=>{
      this.likes_count = data.likes_count;
      this.reply.did_like = !this.reply.did_like;
    })
  }else{
    this.router.navigate(['/auth']);
  }
  }

  ngOnInit(): void {
    this.getLikesCount();
  }

}
