import { Component, OnInit, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blog-grid-card',
  templateUrl: './blog-grid-card.component.html',
  styleUrls: ['./blog-grid-card.component.css']
})
export class BlogGridCardComponent implements OnInit {
  @Input('post') post;

  constructor() { }

  ngOnInit(): void {
  }

}
