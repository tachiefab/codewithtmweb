import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactCardComponent } from './contact-card/contact-card.component';



@NgModule({
  declarations: [ContactPageComponent, ContactFormComponent, ContactCardComponent],
  imports: [
    CommonModule,
    NgModule,
    ContactusRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ContactusModule { }
