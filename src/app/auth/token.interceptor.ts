<<<<<<< HEAD
// import { AuthService } from 'src/app/core/services/auth/auth.service';

// import { Injectable, InjectionToken, Inject, PLATFORM_ID } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
// import { catchError, filter, take, switchMap,  tap, timeout } from 'rxjs/operators';
// import { isPlatformServer } from '@angular/common';
// import { TransferState, StateKey, makeStateKey } from '@angular/platform-browser';

// export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {

//   private isRefreshing = false;
//   private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

//   constructor(
//     public authService: AuthService,
//     private transferState: TransferState,
//     @Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number,
//     @Inject(PLATFORM_ID) private platformId: object
//     ) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const timeoutValue = request.headers.get('timeout') || this.defaultTimeout;
//     const timeoutValueNumeric = Number(timeoutValue);
//     const key: StateKey<string> = makeStateKey<string>(request.url);

//     if (this.authService.getJwtToken()) {
//       request = this.addToken(request, this.authService.getJwtToken());
//     }

//     if (isPlatformServer(this.platformId)) {
//       // serverSide
//       return next.handle(request).pipe(
//         timeout(timeoutValueNumeric),
//         tap((event) => {
//           this.transferState.set(key, (event as HttpResponse<any>).body);
//         }),
//         catchError(error => {
//           if (error instanceof HttpErrorResponse && error.status === 401) {
//             return this.handle401Error(request, next);
//           } else {
//             return this.networkErrorScenario(error, request, next);
//           }
//         }));
//     } else {
//       // browserSide
//       const storedResponse = this.transferState.get<any>(key, null);
//       if (storedResponse) {
//         const response = new HttpResponse({body: storedResponse, status: 200});
//         return of(response);
//       } else {
//         return next.handle(request).pipe(
//           timeout(timeoutValueNumeric),
//           tap((response: HttpResponse<any>) => {
//             return response;
//           }),
//           catchError(error => {
//             if (error instanceof HttpErrorResponse && error.status === 401) {
//               return this.handle401Error(request, next);
//             } else {
//               return this.networkErrorScenario(error, request, next);
//             }
//           })
//         );
//       }
//     }


//   }
  
//   private addToken(request: HttpRequest<any>, token: string) {
//     return request.clone({
//       setHeaders: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     });
//   }

//   private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
//     if (!this.isRefreshing) {
//       this.isRefreshing = true;
//       this.refreshTokenSubject.next(null);

//       return this.authService.refreshToken().pipe(
//         switchMap((token: any) => {
//           this.isRefreshing = false;
//           this.refreshTokenSubject.next(token.access);
//           return next.handle(this.addToken(request, token.access));
//         }));

//     } else {
//       return this.refreshTokenSubject.pipe(
//         filter(token => token != null),
//         take(1),
//         switchMap(access => {
//           return next.handle(this.addToken(request, access));
//         }));
//     }
//   }

//   private networkErrorScenario(error: HttpErrorResponse, request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return throwError(error);
//   }
// }


import {Injectable, Inject, Optional} from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Request} from 'express';
import {REQUEST} from '@nguniversal/express-engine/tokens';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(@Optional() @Inject(REQUEST) private request: Request) {}

  // constructor(
  //       public authService: AuthService,
  //       private transferState: TransferState,
  //       @Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number,
  //       @Inject(PLATFORM_ID) private platformId: object
  //       ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let serverReq: HttpRequest<any> = req;
    if (this.request) {
      let newUrl = `${this.request.protocol}://${this.request.get('host')}`;
      if (!req.url.startsWith('/')) {
        newUrl += '/';
      }
      newUrl += req.url;
      serverReq = req.clone({url: newUrl});
    }
    return next.handle(serverReq);
  }
}

=======
import { AuthService } from 'src/app/core/services/auth/auth.service';

import { Injectable, InjectionToken, Inject, PLATFORM_ID } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { catchError, filter, take, switchMap,  tap, timeout } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { TransferState, StateKey, makeStateKey } from '@angular/platform-browser';

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    public authService: AuthService,
    private transferState: TransferState,
    @Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number,
    @Inject(PLATFORM_ID) private platformId: object
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const timeoutValue = request.headers.get('timeout') || this.defaultTimeout;
    const timeoutValueNumeric = Number(timeoutValue);
    const key: StateKey<string> = makeStateKey<string>(request.url);

    if (this.authService.getJwtToken()) {
      request = this.addToken(request, this.authService.getJwtToken());
    }

    if (isPlatformServer(this.platformId)) {
      // serverSide
      return next.handle(request).pipe(
        timeout(timeoutValueNumeric),
        tap((event) => {
          this.transferState.set(key, (event as HttpResponse<any>).body);
        }),
        catchError(error => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            return this.handle401Error(request, next);
          } else {
            return this.networkErrorScenario(error, request, next);
          }
        }));
    } else {
      // browserSide
      const storedResponse = this.transferState.get<any>(key, null);
      if (storedResponse) {
        const response = new HttpResponse({body: storedResponse, status: 200});
        return of(response);
      } else {
        return next.handle(request).pipe(
          timeout(timeoutValueNumeric),
          tap((response: HttpResponse<any>) => {
            return response;
          }),
          catchError(error => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
              return this.handle401Error(request, next);
            } else {
              return this.networkErrorScenario(error, request, next);
            }
          })
        );
      }
    }


  }
  
  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.access);
          return next.handle(this.addToken(request, token.access));
        }));

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(access => {
          return next.handle(this.addToken(request, access));
        }));
    }
  }

  private networkErrorScenario(error: HttpErrorResponse, request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return throwError(error);
  }
}
>>>>>>> 055ef3bbe72d20b9f759794151fa22157a398c8a
