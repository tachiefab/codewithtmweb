import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutusService } from './../../core/services/aboutus/aboutus.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  private req: any;
  private routeSub:any;
  contact: any;
  id:number;

  constructor(
            private route: ActivatedRoute, 
            private aboutusService:AboutusService
            ) {
    this.getContact();
   }

  getContact = () => {
    this.routeSub = this.route.params.subscribe(params => {
      this.req = this.aboutusService.getOne(1).subscribe(data=>{
        this.contact = data.contact_information as any
        console.log(this.contact)
      })
  })
  }

  ngOnInit(): void {
  }

}
