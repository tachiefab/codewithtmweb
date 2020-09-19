import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend  } from '@angular/common/http';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  baseUrl = environment.baseUrl;
  httpBackend = new HttpClient(this.backend);
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private backend: HttpBackend) { }

    sendMessage = (formData) => {
      const body = JSON.stringify(formData);
      return this.httpBackend.post(`${this.baseUrl}contact-us/`, body, 
      {headers: this.httpHeaders});
    }

}
