
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SafePipe } from './utility/safe.pipe';
import { LogoComponent } from './logo/logo.component';
import { AuthUserService } from './utility/authUser.service';
@NgModule({
    declarations: [
        // AuthUserService,
        SafePipe,
        LogoComponent,
    ],
    imports: [
        CommonModule,
        SharedRoutingModule
    ],
    exports: [
        // AuthUserService,
        SafePipe,
        LogoComponent,
    ]
})
export class SharedModule {
}
