import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    SharedModule
  ]
})
export class AboutusModule { }
