import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/core/services/comment/comment.service';

@Component({
  selector: 'app-reply-comment-card',
  templateUrl: './reply-comment-card.component.html',
  styleUrls: ['./reply-comment-card.component.css']
})
export class ReplyCommentCardComponent implements OnInit {
  @Input('reply') reply;
  private req: any;
  likes_count:number;

  constructor(private commentService:CommentService) {
  }

  getLikesCount = () => {
    this.likes_count = this.reply.likes_count
  }

  likeToggle = () => {
    this.req = this.commentService.LikeOne(this.reply.id).subscribe(data=>{
      this.likes_count = data.likes_count;
      this.reply.did_like = !this.reply.did_like;
    })
  }

  ngOnInit(): void {
    this.getLikesCount();
  }

}
