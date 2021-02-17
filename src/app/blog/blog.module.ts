import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentModule } from './../comment/comment.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogListCategorizedComponent } from './blog-list-categorized/blog-list-categorized.component';
import { BlogListTaggedComponent } from './blog-list-tagged/blog-list-tagged.component';
import { ArticleComponent } from './article/article.component';
import { PostCardComponent } from './post-card/post-card.component';
import { ArticleRelatedCardComponent } from './article-related-card/article-related-card.component';
import { SocialShareComponent } from './social-share/social-share.component';
import { SharedModule } from '../shared/SharedModule';


@NgModule({
  declarations: [
                ArticleComponent, 
                ArticleRelatedCardComponent,
                BlogListComponent, 
                BlogListCategorizedComponent,
                BlogListTaggedComponent,
                PostCardComponent,
                SocialShareComponent
              ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    CommentModule,
  ]
})
export class BlogModule { }
