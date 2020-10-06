import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = environment.baseUrl;
  httpBackend = new HttpClient(this.backend);
  constructor(private httpClient: HttpClient, private backend: HttpBackend) { }

  getAll(): Observable<any> {
    return this.httpBackend.get(this.baseUrl + "categories/");
  }
}
