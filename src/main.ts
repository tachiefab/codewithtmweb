import { AppBrowserModule } from './app/app.browser.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// document.addEventListener('DOMContentLoaded', () => {
//   platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
// });


document.addEventListener('DOMContentLoaded', () => {

  platformBrowserDynamic().bootstrapModule(AppBrowserModule)
  
  .catch(err => console.error(err));
  
  });
  
  