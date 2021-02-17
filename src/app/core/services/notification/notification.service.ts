import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient) { }

    getNext(url): Observable<any> {
      return this.http.get(url);
    }

    getAll(): Observable<any> {
      return this.http.get(this.baseUrl + "notifications/");
    }

}