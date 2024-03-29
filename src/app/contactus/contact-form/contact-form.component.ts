import { ContactusService } from './../../core/services/contactus/contactus.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;
  contactUsForm: FormGroup;

    constructor(
      private formBuilder: FormBuilder, 
      // private router: Router, 
      private contactusService: ContactusService,
      private toastrService: ToastrService
      ) { }

      ngOnInit() {
        this.contactUsForm = this.formBuilder.group({
          full_name: [''],
          email: [''],
          subject: [''],
          message: ['']
        });
        // toast container
      this.toastrService.overlayContainer = this.toastContainer;
      }


      get f() {
        return this.contactUsForm.controls; 
       }

      sendMessage() {
        this.contactusService.sendMessage(
          {
            full_name: this.f.full_name.value,
            email: this.f.email.value,
            subject: this.f.subject.value,
            message: this.f.message.value
          }
        )
        .subscribe(success => {
          if (success) {
            this.toastrService.info('Thanks for getting in touch. We will surely get back to you.', 'Message sent successfully');
            // this.router.navigate(['/blog']);
          }
        });
      }

}
