import { Component, OnInit, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-search-post-card',
  templateUrl: './search-post-card.component.html',
  styleUrls: ['./search-post-card.component.css']
})
export class SearchPostCardComponent implements OnInit {
  @Input('post') post;

  constructor() {}

  ngOnInit(): void {
  }

}
