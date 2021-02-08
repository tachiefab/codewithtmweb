import { Component, OnInit, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-faq-article',
  templateUrl: './faq-article.component.html',
  styleUrls: ['./faq-article.component.css']
})
export class FaqArticleComponent implements OnInit {
  @Input('category') category;

  constructor() { }

  ngOnInit(): void {
  }

}
