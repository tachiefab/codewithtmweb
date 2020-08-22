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

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }

  getAll(slug): Observable<any> {
    return this.httpClient.get(this.baseUrl + "comments/?slug=" + slug );
  }

   getOne(slug): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'posts/' + slug +'/');
  }

  comment = (commentData) => {
    const body = JSON.stringify(commentData);
    return this.httpClient.post(`${this.baseUrl}comments/create/`, body
    );
  }

}
