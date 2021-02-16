import { Component, OnInit, Input } from '@angular/core';

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
