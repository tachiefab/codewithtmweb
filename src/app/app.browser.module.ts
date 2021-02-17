import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppModule,
    BrowserTransferStateModule
  ],
  bootstrap: [AppComponent],
  providers: [
    TransferState
  ]
})
export class AppBrowserModule {}
