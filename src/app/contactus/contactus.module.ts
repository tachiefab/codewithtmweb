import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// third party
import {ToastContainerModule } from 'ngx-toastr';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { SharedModule } from '../shared/SharedModule';



@NgModule({
  declarations: [ContactPageComponent, ContactFormComponent, ContactCardComponent],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ToastContainerModule
  ]
})
export class ContactusModule { }
