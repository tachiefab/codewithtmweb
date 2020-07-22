import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { ReplyCommentCardComponent } from './reply-comment-card/reply-comment-card.component';
import { CommentThreadComponent } from './comment-thread/comment-thread.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';



@NgModule({
  declarations: [
            CommentFormComponent, 
            CommentCardComponent, 
            ReplyCommentCardComponent, 
            CommentThreadComponent, 
            CommentSectionComponent
          ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ],
  exports: [
    CommentSectionComponent
  ]
})
export class CommentModule { }
