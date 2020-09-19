import { SubscribeService } from './../../core/services/suscribe/subscribe.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeComponent implements OnInit {
  subscribeForm: FormGroup;
  private req: any;

  constructor(
    private subscribeService:SubscribeService,
    private formBuilder: FormBuilder
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
  ).subscribe(data=>{
    console.log(data)
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
  }

}
