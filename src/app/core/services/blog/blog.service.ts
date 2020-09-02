import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getNext(url): Observable<any> {
    return this.http.get(url);
  }

  
  getAll(slug): Observable<any> {
    return this.http.get(this.baseUrl + 'posts' + slug);
  }

   getOne(slug): Observable<any> {
    return this.http.get(this.baseUrl + 'posts/' + slug +'/');
  }

  LikeOne(slug): Observable<any> {
    return this.http.get(this.baseUrl + 'posts/' + slug +'/like/');
  }

  getItemTags(slug): Observable<any> {
    return this.http.get(this.baseUrl + 'tags/?post_slug=' + slug);
  }

  getRelated(slug): Observable<any> {
    return this.http.get(this.baseUrl + 'posts/related/?post_slug=' + slug);
  }

}
