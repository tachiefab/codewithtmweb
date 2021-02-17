import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutusService {
  baseUrl = environment.baseUrl;
  httpBackend = new HttpClient(this.backend);

  constructor(private backend: HttpBackend) { }


   getOne(id): Observable<any> {
    return this.httpBackend.get(this.baseUrl + 'about-us/' + id +'/');
  }

}
