import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl = environment.baseUrl;
  
	httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }


  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "posts/", 
    	{headers: this.httpHeaders});
  }

   getOne(slug): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'posts/' + slug +'/',
    {headers: this.httpHeaders});
  }

  getRelated(slug): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'posts/related/?post_slug=' + slug, 
    	{headers: this.httpHeaders});
  }

  getAuthHeaders() {
    const token = this.cookieService.get('codewithtm-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`
    });
  }


}
