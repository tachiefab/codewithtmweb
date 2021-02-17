import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseurl = 'assets/json/'

@Injectable({
  providedIn: 'root'
})
export class ContactInternalService {

  constructor(private http: HttpClient) { }

getContactUsHeader(): Observable<any> {
    return this.http.get(baseurl + "contact-us-page-info.json");
  }
}

