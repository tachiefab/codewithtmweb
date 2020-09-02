
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { PaginationComponent } from './pagination/pagination.component';
import { SafePipe } from './utility/safe.pipe';
import { LogoComponent } from './logo/logo.component';
// import { AuthUserService } from './utility/authUser.service';
@NgModule({
    declarations: [
        PaginationComponent,
        SafePipe,
        LogoComponent,
    ],
    imports: [
        CommonModule,
        // NgModule,
        SharedRoutingModule
    ],
    exports: [
        SafePipe,
        LogoComponent,
    ]
})
export class SharedModule {
}
