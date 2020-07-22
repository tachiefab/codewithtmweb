import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BlogModule } from './blog/blog.module';
import { BlockModule } from './block/block.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
// import { HeaderService } from './core/services/blog/headerService';
// import { HeaderService } from './core/services/blog/headerService';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderService
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BlogModule,
    BlockModule,
    CoreModule,
    SharedModule
    // HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
