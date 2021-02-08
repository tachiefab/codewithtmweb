import { SubscribeService } from './../../core/services/suscribe/subscribe.service';
import { Component, OnInit, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;
  subscribeForm: FormGroup;
  private req: any;

  constructor(
    private subscribeService:SubscribeService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
    ) {}

  loadSubscribeForm() {
    this.subscribeForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
}

subscribe = () => {
  // alert("Thanks for your subscribtion")
  this.req = this.subscribeService.suscribe(
    this.subscribeForm.value
  ).subscribe(
    data=>{
      if (data) {
        this.toastrService.info('Thanks for subscribing to us.', 'Email subscribtion');
        // this.router.navigate(['/profile']);
      }
  })
    //  clear subscribe inputs
    this.clearSubscribeFormInputs();
}

clearSubscribeFormInputs = () => {
  this.subscribeForm = this.formBuilder.group({
    email: ['']
  });
}

  ngOnInit(): void {
    // load subscribe form
    this. loadSubscribeForm();
    //  clear subscribe inputs
    this.clearSubscribeFormInputs();

    // toast container
    this.toastrService.overlayContainer = this.toastContainer;
  }

}
