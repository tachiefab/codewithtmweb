import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl = environment.baseUrl;
  httpBackend = new HttpClient(this.backend);
  
  constructor(private httpClient: HttpClient, private backend: HttpBackend) { }

  getNext(url): Observable<any> {
    return this.httpBackend.get(url);
  }

  
  getAll(slug): Observable<any> {
    return this.httpBackend.get(this.baseUrl + 'posts' + slug);
  }

   getOne(slug): Observable<any> {
    return this.httpBackend.get(this.baseUrl + 'posts/' + slug +'/');
  }

  LikeOne(slug): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'posts/' + slug +'/like/');
  }

  getItemTags(slug): Observable<any> {
    return this.httpBackend.get(this.baseUrl + 'tags/?post_slug=' + slug);
  }

  getRelated(slug): Observable<any> {
    return this.httpBackend.get(this.baseUrl + 'posts/related/?post_slug=' + slug);
  }

}
