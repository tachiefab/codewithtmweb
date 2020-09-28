import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockRoutingModule } from './block-routing.module';
// import { NotificationCardComponent } from './notification-card/notification-card.component';



@NgModule({
  declarations: [
                // NotificationCardComponent
              ],
  imports: [
    CommonModule,
    BlockRoutingModule,
  ],
  exports: [
    // NotificationCardComponent
  ]
})
export class BlockModule { }
