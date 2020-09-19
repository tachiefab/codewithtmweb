import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient) { }

    getNext(url): Observable<any> {
      return this.http.get(url);
    }

    getAll(username): Observable<any> {
      return this.http.get(this.baseUrl + "likes/?username=" + username );
    }

    updateProfile = (profileData) => {
      const body = JSON.stringify(profileData);
      return this.http.put(`${this.baseUrl}user/profile/update/`, body);
    }

}
