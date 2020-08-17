import { ContactusService } from './../../core/services/contactus/contactus.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactUsForm: FormGroup;

    constructor(
      private formBuilder: FormBuilder, 
      private router: Router, 
      private contactusService: ContactusService
      ) { }

      ngOnInit() {
        this.contactUsForm = this.formBuilder.group({
          full_name: [''],
          email: [''],
          subject: [''],
          message: ['']
        });
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
            this.router.navigate(['/blog']);
          }
        });
      }

}
