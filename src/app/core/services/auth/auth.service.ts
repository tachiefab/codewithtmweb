import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { Tokens } from './../../../auth/models/tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly USERNAME = 'USERNAME';
  private loggedUser: string;
  httpBackend = new HttpClient(this.backend);
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
            private httpClient: HttpClient, 
            private backend: HttpBackend
            ) {}

  login(user: { username: string, password: string }): Observable<boolean> {
    return this.httpClient.post<any>(`${this.baseUrl}auth/jwt/`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  logout() {
    return this.httpClient.post<any>(`${this.baseUrl}/logout`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.httpClient.post<any>(`${this.baseUrl}auth/jwt/refresh/`, {
      'refresh': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.access);
    }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeTokens(username, tokens);

  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(access: string) {
    localStorage.setItem(this.JWT_TOKEN, access);
  }

  private storeTokens(username, tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.access);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh);
    localStorage.setItem(this.USERNAME, username);
  }

  removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
    localStorage.removeItem(this.USERNAME);
  }

  register = (authData) => {
    const body = JSON.stringify(authData);
    return this.httpBackend.post(`${this.baseUrl}auth/register/`, body, 
    {headers: this.httpHeaders});
  }

  emailVerification(token): Observable<any> {
    return this.httpBackend.get(this.baseUrl + 'auth/email-verify/?token=' + token, 
    {headers: this.httpHeaders});
  }

  requestPasswordResetEmail = (email) => {
    const body = JSON.stringify(email);
    return this.httpBackend.post(`${this.baseUrl}auth/request-reset-email/`, body, 
    {headers: this.httpHeaders});
  }

  resetPassword = (resetData) => {
    const body = JSON.stringify(resetData);
    return this.httpBackend.patch(`${this.baseUrl}auth/password-reset-complete/`, body, 
    {headers: this.httpHeaders});
  }
  
}
