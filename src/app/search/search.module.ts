import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDetailComponent } from './search-detail/search-detail.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../shared/SharedModule';
// import { PostCardComponent } from '../blog/post-card/post-card.component';
// import { PostCardComponent } from './post-card/post-card.component';
import { SearchPostCardComponent } from './search-post-card/search-post-card.component';



@NgModule({
  declarations: [
                SearchDetailComponent, 
                SearchPostCardComponent
              ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
  ]
})
export class SearchModule { }
