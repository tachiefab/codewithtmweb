import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ArticleComponent } from './article/article.component';
import { PostCardComponent } from './post-card/post-card.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
                BlogListComponent, 
                ArticleComponent, 
                PostCardComponent
              ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
