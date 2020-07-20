import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PaginationComponent } from './pagination/pagination.component';
import { SafePipe } from './utility/safe.pipe';

@NgModule({
  declarations: [
    PaginationComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
 exports: [
    SafePipe
  ]
})
export class SharedModule { }
