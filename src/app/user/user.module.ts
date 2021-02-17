import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// third party
import {ToastContainerModule } from 'ngx-toastr';

// local 
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { BlogGridCardComponent } from './blog-grid-card/blog-grid-card.component';
import { SharedModule } from '../shared/SharedModule';



@NgModule({
  declarations: [
        ProfileComponent, 
        ProfileFormComponent, 
        BlogGridCardComponent, 
       
        
      ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ToastContainerModule,
    FormsModule
  ],
  exports: []
})
export class UserModule { }
