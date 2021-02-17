import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  baseUrl = environment.baseUrl;
  
	httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private httpClient: HttpClient
  ) { }

   getOne(username): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'author/' + username +'/',
    {headers: this.httpHeaders});
  }


}
