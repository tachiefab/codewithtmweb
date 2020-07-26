import { Component, OnInit, Input } from '@angular/core';
import { HeaderService } from 'src/app/core/services/blog/headerService';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
  @Input('comment') comment;
  replies: any;

  constructor(private headerServie:HeaderService) {
    
   }
 

  getCommentReplies = () => {
    this.replies = this.comment.replies
  }
  ngOnInit(): void {
    this.getCommentReplies()
  }
  

}
