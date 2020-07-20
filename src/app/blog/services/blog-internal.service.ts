import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseurl = 'assets/json/'

@Injectable({
  providedIn: 'root'
})
export class BlogInternalService {

  constructor(private http: HttpClient) { }

getBlogListHeader(): Observable<any> {
    return this.http.get(baseurl + "blog-list-page-info.json");
  }
}
