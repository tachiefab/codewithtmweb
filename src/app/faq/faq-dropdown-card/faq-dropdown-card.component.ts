import { Component, OnInit, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-faq-dropdown-card',
  templateUrl: './faq-dropdown-card.component.html',
  styleUrls: ['./faq-dropdown-card.component.css']
})
export class FaqDropdownCardComponent implements OnInit {
  @Input('faq') faq;



  constructor() { }

  ngOnInit(): void {
  }

}
