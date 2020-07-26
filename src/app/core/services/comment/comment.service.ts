import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl = environment.baseUrl;
	httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }


  getAll(id): Observable<any> {
    return this.httpClient.get(this.baseUrl + "comments/?obj_id=" + id, 
      {headers: this.httpHeaders});
  }

   getOne(slug): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'posts/' + slug +'/',
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
