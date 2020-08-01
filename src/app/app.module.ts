import { BrowserModule } from '@angular/platform-browser';
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
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    AuthorModule,
    BlogModule,
    BlockModule,
    CommentModule,
    CoreModule,
    FaqModule,
    NotfoundModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
