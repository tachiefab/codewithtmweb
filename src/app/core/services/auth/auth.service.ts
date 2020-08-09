import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  
  refreshToken() {
    return this.http.post<any>(`${this.baseUrl}jwt/refresh`, {
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.token);
    }));
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
}
