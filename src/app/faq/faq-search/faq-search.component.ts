import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-faq-search',
  templateUrl: './faq-search.component.html',
  styleUrls: ['./faq-search.component.css']
})
export class FaqSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
