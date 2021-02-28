import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  
  // { 
  //   path: '', 
  //   redirectTo: '/blog', 
  //   pathMatch: 'full'
  //  },

  { 
    path: 'about', 
    loadChildren: () => import(`./aboutus/aboutus.module`).then(m => m.AboutusModule)
   },

  // { 
  //   path: 'auth', 
  //   loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)
  //  },

  { path: 'author', 
  loadChildren: () => import(`./author/author.module`).then(m => m.AuthorModule)
 },

  { 
    // path: 'blog', 
    path: '', 
    loadChildren: () => import(`./blog/blog.module`).then(m => m.BlogModule) 
  },

  { 
    path: 'contact', 
    loadChildren: () => import(`./contactus/contactus.module`).then(m => m.ContactusModule) 
  },

  // { 
  //   path: 'faq', 
  //   loadChildren: () => import(`./faq/faq.module`).then(m => m.FaqModule) 
  // },

  // { 
  //   path: 'notifications', 
  //   loadChildren: () => import(`./notification/notification.module`).then(m => m.NotificationModule) 
  // },

  // { 
  //   path: 'profile', 
  //   loadChildren: () => import(`./user/user.module`).then(m => m.UserModule) 
  //   // canActivate: [AuthGuard] 
  // },

  
  { 
    path: 'search', 
    loadChildren: () => import(`./search/search.module`).then(m => m.SearchModule) 
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
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
