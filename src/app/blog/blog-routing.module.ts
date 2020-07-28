import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogListCategorizedComponent } from './blog-list-categorized/blog-list-categorized.component';
import { BlogListTaggedComponent } from './blog-list-tagged/blog-list-tagged.component';
import { ArticleComponent }  from './article/article.component';


const routes: Routes = [
  {
    path: '', 
    component: BlogListComponent,
  },
  {
    path: 'article/:slug', 
    component: ArticleComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

