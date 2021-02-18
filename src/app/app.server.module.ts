// import { NgModule } from '@angular/core';
// import { ServerModule } from '@angular/platform-server';

// import { AppModule } from './app.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   imports: [
//     AppModule,
//     ServerModule,
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppServerModule {}


import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
// import { TokenInterceptor, DEFAULT_TIMEOUT } from './auth/token.interceptor';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent],
  providers: [
    // TransferState
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    // { provide: DEFAULT_TIMEOUT, useValue: 30000 },
    TransferState
  ]
})
export class AppServerModule {}
