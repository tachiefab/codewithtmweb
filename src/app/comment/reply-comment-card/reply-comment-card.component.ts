import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reply-comment-card',
  templateUrl: './reply-comment-card.component.html',
  styleUrls: ['./reply-comment-card.component.css']
})
export class ReplyCommentCardComponent implements OnInit {
  @Input('reply') reply;

  constructor() { }

  ngOnInit(): void {
  }

}
