import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
     readonly JWT_TOKEN = 'JWT_TOKEN';

     
  
  isLoggedIn() {
    return !!this.getJwtToken();
  }

  getJwtToken() {
        // if (isPlatformBrowser(this.platformId)) {
          return localStorage.getItem(this.JWT_TOKEN);
        // }
  }

  constructor(@Inject(PLATFORM_ID) private platformId: object) {

   }
}
