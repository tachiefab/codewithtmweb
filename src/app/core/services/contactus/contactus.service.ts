import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  baseUrl = environment.baseUrl;
	httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

    sendMessage = (formData) => {
      const body = JSON.stringify(formData);
      return this.http.post(`${this.baseUrl}contact-us/`, body, 
      {headers: this.httpHeaders}
      );
    }

}
