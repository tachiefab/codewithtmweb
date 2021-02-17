import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NotificationCardComponent } from '../shared/notification-card/notification-card.component';
import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationPageComponent } from './notification-page/notification-page.component';
import { SharedModule } from '../shared/SharedModule';
import { NotificationMainCardComponent } from './notification-main-card/notification-main-card.component';



@NgModule({
  declarations: [
    // NotificationCardComponent,
    NotificationPageComponent,
    NotificationMainCardComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    SharedModule
    
  ],
  exports: [
    // NotificationCardComponent,
  ]
})
export class NotificationModule { }
