import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
  darkTheme: boolean = true;

  constructor(
            private logInternalService:ContactInternalService, 
            private headerService: HeaderService
            ) { }

  ngOnInit(): void {
    this.req = this.logInternalService.getContactUsHeader().subscribe(data=>{
      this.headerInfo = data[0];
      this.headerService.sendHeaderInfo(this.headerInfo);
      this.headerService.sendHasDarkTheme(this.darkTheme);
    })
  }

}
