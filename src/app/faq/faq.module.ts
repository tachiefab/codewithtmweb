import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { FaqRoutingModule } from './faq-routing.module';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { FaqSearchComponent } from './faq-search/faq-search.component';
import { FaqDropdownCardComponent } from './faq-dropdown-card/faq-dropdown-card.component';
import { FaqCategoryCardComponent } from './faq-category-card/faq-category-card.component';
import { FaqArticleComponent } from './faq-article/faq-article.component';



@NgModule({
  declarations: [
                FaqPageComponent, 
                FaqSearchComponent, 
                FaqDropdownCardComponent, 
                FaqCategoryCardComponent, 
                FaqArticleComponent
              ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule
  ]
})
export class FaqModule { }
