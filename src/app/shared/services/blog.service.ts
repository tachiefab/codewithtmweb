import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl = environment.baseUrl;
  httpBackend = new HttpClient(this.backend);
  constructor(private httpClient: HttpClient, private backend: HttpBackend) { }

  getAll(): Observable<any> {
    return this.httpBackend.get(this.baseUrl + "analytics/most-viewed/");
  }

}