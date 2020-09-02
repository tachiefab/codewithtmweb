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
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  getNext(url): Observable<any> {
    return this.http.get(url);
  }

  getAll(slug): Observable<any> {
    return this.http.get(this.baseUrl + "comments/?slug=" + slug );
  }

   getOne(slug): Observable<any> {
    return this.http.get(this.baseUrl + 'posts/' + slug +'/');
  }

  LikeOne(id): Observable<any> {
    return this.http.get(this.baseUrl + 'comments/' + id +'/like/');
  }

  comment = (commentData) => {
    const body = JSON.stringify(commentData);
    return this.http.post(`${this.baseUrl}comments/create/`, body
    );
  }

}
