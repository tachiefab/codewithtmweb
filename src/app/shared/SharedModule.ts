import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SafePipe } from './utility/safe.pipe';
import { LogoComponent } from './logo/logo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
import { SearchComponent } from './search/search.component';
import { SmallPostCardComponent } from './small-post-card/small-post-card.component';
import { TagCardComponent } from './tag-card/tag-card.component';
import { HeaderComponent } from './header/header.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { BlockModule } from '../block/block.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        SafePipe,
        LogoComponent,
        SidebarComponent, 
        SidebarmenuComponent, 
        SearchComponent, 
        SmallPostCardComponent, 
        TagCardComponent, 
        HeaderBackComponent,
        HeaderComponent, 
        HeaderBackComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        BlockModule
    ],
    exports: [
        SafePipe,
        LogoComponent,
        SidebarComponent,
        HeaderComponent, 
        HeaderBackComponent,
        FooterComponent
    ]
})
export class SharedModule {
}
