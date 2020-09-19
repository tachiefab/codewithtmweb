import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend  } from '@angular/common/http';
import { Observable } from 'rxjs';


import { environment } from './../../../../environments/environment';
import { AuthUserService } from 'src/app/shared/utility/authUser.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  isLoggedIn: boolean;
  baseUrl = environment.baseUrl;
  httpBackend = new HttpClient(this.backend);
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
            private httpClient: HttpClient, 
            private backend: HttpBackend,
            private userAuthService:AuthUserService,
            ) {}

  getNext(url): Observable<any> {
    return this.httpBackend.get(url);
  }

  getAll(slug): Observable<any> {
    return this.httpBackend.get(this.baseUrl + "comments/?slug=" + slug );
  }

   getOne(slug): Observable<any> {
    return this.httpBackend.get(this.baseUrl + 'posts/' + slug +'/');
  }

  LikeOne(id): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'comments/' + id +'/like/');
  }

  comment = (commentData) => {
      // checking if user is logged in
      this.isLoggedIn = this.userAuthService.isLoggedIn();
      const body = JSON.stringify(commentData);
      if(this.isLoggedIn){
         return this.httpClient.post(`${this.baseUrl}comments/create/`, body
         );
      }else{
        return this.httpBackend.post(`${this.baseUrl}comments/create/`, body, 
        {headers: this.httpHeaders}
        );
      }  
  }

}
