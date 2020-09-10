import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Local imports
import { AuthModule } from './auth/auth.module';
import { AuthorModule } from './author/author.module';
import { BlogModule } from './blog/blog.module';
import { BlockModule } from './block/block.module';
import { CommentModule } from './comment/comment.module';
import { CoreModule } from './core/core.module';
import { FaqModule } from './faq/faq.module';
import { NotfoundModule } from './notfound/notfound.module';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/SharedModule';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    // local modules
    SharedModule,
    AuthModule,
    AuthorModule,
    BlogModule,
    BlockModule,
    CommentModule,
    CoreModule,
    FaqModule,
    NotfoundModule,
    UserModule
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
