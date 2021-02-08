import { Component, OnInit, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-faq-category-card',
  templateUrl: './faq-category-card.component.html',
  styleUrls: ['./faq-category-card.component.css']
})
export class FaqCategoryCardComponent implements OnInit {
    @Input('category') category;

  constructor() { }

  ngOnInit(): void {
  }

}
