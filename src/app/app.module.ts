import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Third party modules
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

// Local imports
import { AuthModule } from './auth/auth.module';
import { AuthorModule } from './author/author.module';
import { BlogModule } from './blog/blog.module';
import { BlockModule } from './block/block.module';
import { CommentModule } from './comment/comment.module';
import { CoreModule } from './core/core.module';
import { FaqModule } from './faq/faq.module';
import { NotfoundModule } from './notfound/notfound.module';
// Uncomment this for notifications
import { NotificationModule } from './notification/notification.module';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { SearchModule } from './search/search.module';
import { SharedModule } from './shared/SharedModule';
import { SubscribeModule } from './subscribe/subscribe.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    // FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    // third party
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'inline',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
    }),

    // ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerModule,
    
    // local modules
    AuthModule,
    AuthorModule,
    BlogModule,
    BlockModule,
    CommentModule,
    CoreModule,
    FaqModule,
    NotfoundModule,
    
    NotificationModule,
    SearchModule,
    SharedModule,
    SubscribeModule,
    UserModule,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
