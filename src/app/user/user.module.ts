import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { NotificationComponent } from './notification/notification.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { BlogGridCardComponent } from './blog-grid-card/blog-grid-card.component';
import { NotificationCardComponent } from './notification-card/notification-card.component';



@NgModule({
  declarations: [
        ProfileComponent, 
        NotificationComponent, 
        ProfileFormComponent, 
        BlogGridCardComponent, 
        NotificationCardComponent
      ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
