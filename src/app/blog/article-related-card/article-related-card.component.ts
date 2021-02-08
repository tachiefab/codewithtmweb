import { Component, OnInit, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-article-related-card',
  templateUrl: './article-related-card.component.html',
  styleUrls: ['./article-related-card.component.css']
})
export class ArticleRelatedCardComponent implements OnInit {
  @Input('post') post;

  constructor() { }

  ngOnInit(): void {
  }

}
