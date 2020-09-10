import { SharedModule } from './../shared/SharedModule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockRoutingModule } from './block-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
import { SearchComponent } from './search/search.component';
import { SmallPostCardComponent } from './small-post-card/small-post-card.component';
import { TagCardComponent } from './tag-card/tag-card.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [
                HeaderComponent, 
                FooterComponent, 
                SidebarComponent, 
                SidebarmenuComponent, 
                SearchComponent, 
                SmallPostCardComponent, 
                TagCardComponent, 
                HeaderBackComponent
              ],
  imports: [
    CommonModule,
    BlockRoutingModule,
    SharedModule,
    UserModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HeaderBackComponent
  ]
})
export class BlockModule { }
