import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentReplyFormComponent } from './comment-reply-form/comment-reply-form.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { ReplyCommentCardComponent } from './reply-comment-card/reply-comment-card.component';
import { CommentThreadComponent } from './comment-thread/comment-thread.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
            CommentFormComponent, 
            CommentReplyFormComponent,
            CommentCardComponent, 
            ReplyCommentCardComponent, 
            CommentThreadComponent, 
            CommentSectionComponent
          ],
  imports: [
    CommonModule,
    NgModule,
    CommentRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    CommentSectionComponent
  ]
})
export class CommentModule { }
