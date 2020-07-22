import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorPageComponent } from './author-page/author-page.component';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [AuthorPageComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    SharedModule
  ]
})
export class AuthorModule { }
