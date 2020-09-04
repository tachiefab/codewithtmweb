import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { CookieService } from 'ngx-cookie-service';
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

   getOne(id): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'author/' + id +'/',
    {headers: this.httpHeaders});
  }


}
