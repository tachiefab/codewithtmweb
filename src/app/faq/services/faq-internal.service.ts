import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseurl = 'assets/json/'

@Injectable({
  providedIn: 'root'
})
export class FaqInternalService {

  constructor(private http: HttpClient) { }

getFaqHeader(): Observable<any> {
    return this.http.get(baseurl + "faq-page-info.json");
  }
}