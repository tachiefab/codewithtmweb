import { Component, OnInit } from '@angular/core';

import { FaqService } from './../../core/services/faq/faq.service';
import { FaqInternalService } from '../services/faq-internal.service';
import { HeaderService } from 'src/app/core/services/blog/headerService';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent implements OnInit {
  allFaqList : any;
  faqByCategoryList : any;
  private req: any;
  headerInfo : any;
  darkTheme: boolean = true;

  constructor(
    private faqService:FaqService,
    private faqInternalService:FaqInternalService,
    private headerService: HeaderService
    ) {
this.getAllFaqs();
this.getFaqsByCategory();
}

getAllFaqs = () => {
  this.faqService.getAll('faqs/').subscribe(
    data => {
      this.allFaqList = data.results;
    },
    error => {
      console.log(error);
    }
  );
}

getFaqsByCategory = () => {
  this.faqService.getAll('categories/').subscribe(
    data => {
      this.faqByCategoryList = data.results;
    },
    error => {
      console.log(error);
    }
  );
}

ngOnInit(): void {
  this.req = this.faqInternalService.getFaqHeader().subscribe(data=>{
    this.headerInfo = data[0];
    this.headerService.sendHeaderInfo(this.headerInfo);
    this.headerService.sendHasDarkTheme(this.darkTheme);
  })
}

}
