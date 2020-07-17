import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogListComponent } from './blog-list/blog-list.component';
import { ArticleComponent }  from './article/article.component';


const routes: Routes = [
  {path: '', component: BlogListComponent},
  {path: 'article/:id', component: ArticleComponent},
  // {path: 'article-edit/:id', component: ArticleEditComponent},
  // {path: 'article-create', component: ArticleCreateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }