import { Component, OnInit } from '@angular/core';
import { ContactInternalService } from './../services/contact-internal.service';
import { HeaderService } from 'src/app/core/services/blog/headerService';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  private req: any;
  headerInfo : any;
  bootstrapClass = 'header header-over large'
  headerBack: boolean = true;
  sideBar: boolean = true;
  isMainPage: boolean = false;

  constructor(
            private logInternalService:ContactInternalService, 
            private headerService: HeaderService
            ) { }

  ngOnInit(): void {
    this.req = this.logInternalService.getContactUsHeader().subscribe(data=>{
      this.headerInfo = data[0];
      this.headerService.sendHeaderInfo(this.headerInfo);
      this.headerService.sendisMainPage(this.isMainPage);

      this.headerService.sendBootstrapClass(this.bootstrapClass);
      this.headerService.sendHeaderBack(this.headerBack);
      // this.headerService.sendsideBar(this.sideBar)
    })
  }

}
