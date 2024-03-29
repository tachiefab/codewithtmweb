import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { SafePipe } from './utility/safe.pipe';
import { LogoComponent } from './logo/logo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
import { SmallPostCardComponent } from './small-post-card/small-post-card.component';
import { TagCardComponent } from './tag-card/tag-card.component';
import { HeaderComponent } from './header/header.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { BlockModule } from '../block/block.module';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from '../subscribe/subscribe-form/subscribe-form.component';
import { SearchFormComponent } from '../search/search-form/search-form.component';

// Uncomment this to use notification
// import { NotificationCardComponent } from './notification-card/notification-card.component';


@NgModule({
    declarations: [
        SafePipe,
        LogoComponent,
        SidebarmenuComponent, 
        SearchFormComponent, 
        SmallPostCardComponent, 
        TagCardComponent, 
        HeaderBackComponent,
        HeaderComponent, 
        HeaderBackComponent,
        // NotificationCardComponent,
        FooterComponent,
        SubscribeComponent,
        SidebarComponent, 
    ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        BlockModule,
        ReactiveFormsModule
    ],
    exports: [
        SafePipe,
        LogoComponent,
        HeaderComponent, 
        HeaderBackComponent,
        FooterComponent,
        SidebarComponent, 
        SubscribeComponent,
        // NotificationCardComponent
        
    ]
})
export class SharedModule {
}
