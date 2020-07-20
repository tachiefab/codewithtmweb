import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
// import { SafePipe } from '../shared/utility/safe.pipe';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]  
})
export class CoreModule { }
