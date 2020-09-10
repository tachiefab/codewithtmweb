import { SharedModule } from './../shared/SharedModule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]  
})
export class CoreModule { }
