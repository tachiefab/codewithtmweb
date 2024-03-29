import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { SharedModule } from '../shared/SharedModule';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    SharedModule
  ]
})
export class AboutusModule { }
