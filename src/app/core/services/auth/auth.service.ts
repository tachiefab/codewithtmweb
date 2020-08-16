import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { Tokens } from './../../../auth/models/tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    baseUrl = environment.baseUrl;
    token: string;

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser: string;

  constructor(private http: HttpClient) {}

  login(user: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${this.baseUrl}auth/`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  logout() {
    return this.http.post<any>(`${this.baseUrl}/logout`, {
      'refreshToken': this.getJwtToken()
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

  // refreshToken() {
  //   return this.http.post<any>(`${this.baseUrl}auth/jwt/refresh/`, {
  //     // 'refreshToken': this.getJwtToken()
  //   }).pipe(tap((tokens: Tokens) => {
  //     this.storeJwtToken(tokens.token);
  //   }));
  // }

  refreshToken(): Observable<boolean> {
    this.token = this.getJwtToken()
    console.log(this.token)
    return this.http.post<any>(`${this.baseUrl}auth/jwt/refresh/`, this.token)
      .pipe(
        tap(tokens => this.getJwtToken(),
        mapTo(true)
        // catchError(error => {
        //   alert(error.error);
        //   return of(false);
        // }
        )
        );
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeJwtToken(tokens.token);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeToken();
  }

  private storeJwtToken(token: string) {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.token);
  }

  private removeToken() {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  register = (authData) => {
    const body = JSON.stringify(authData);
    return this.http.post(`${this.baseUrl}auth/register/`, body, 
    {headers: this.httpHeaders}
    );
  }

  emailVerification(token): Observable<any> {
    return this.http.get(this.baseUrl + 'auth/email-verify/?token=' + token, 
    	{headers: this.httpHeaders});
  }

  requestPasswordResetEmail = (email) => {
    const body = JSON.stringify(email);
    return this.http.post(`${this.baseUrl}auth/request-reset-email/`, body, 
    {headers: this.httpHeaders}
    );
  }

  resetPassword = (uidb64, token, password) => {
    const body = JSON.stringify(uidb64, token, password, );
    console.log(body)
    return this.http.patch(`${this.baseUrl}auth/password-reset-complete/`, body, 
    {headers: this.httpHeaders}
    );
  }




}
