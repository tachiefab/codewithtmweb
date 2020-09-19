import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  baseUrl = environment.baseUrl;
  httpBackend = new HttpClient(this.backend);
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private backend: HttpBackend) { }

    suscribe = (email) => {
      const body = JSON.stringify(email);
      return this.httpBackend.post(`${this.baseUrl}newsletter/subscribe/`, body, 
      {headers: this.httpHeaders}
      );
    }

}
