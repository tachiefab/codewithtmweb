import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/blog', 
    pathMatch: 'full'
   },
  { 
    path: 'about', 
    loadChildren: () => import(`./aboutus/aboutus.module`).then(m => m.AboutusModule)
   },
  { path: 'author', 
  loadChildren: () => import(`./author/author.module`).then(m => m.AuthorModule)
 },
  { 
    path: 'blog', 
    loadChildren: () => import(`./blog/blog.module`).then(m => m.BlogModule) 
  },
  { 
    path: 'contact', 
    loadChildren: () => import(`./contactus/contactus.module`).then(m => m.ContactusModule) 
  },
  { 
    path: 'faq', 
    loadChildren: () => import(`./faq/faq.module`).then(m => m.FaqModule) 
  },
  {
     path: '404', 
     loadChildren: () => import(`./notfound/notfound.module`).then(m => m.NotfoundModule) 
    },
  {
     path: '**',
      redirectTo: '/404' 
    },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
