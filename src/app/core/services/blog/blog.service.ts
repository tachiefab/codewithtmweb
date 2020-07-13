import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

   getOne(ID: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'posts/' + ID + '/',
    {headers: this.httpHeaders});
  }

  // createProduct(productData) {
  //   const body = JSON.stringify(productData);
  //   return this.httpClient.post(`${this.baseUrl}api/products/`, body, {headers: this.getAuthHeaders()});
  // }

  getAuthHeaders() {
    const token = this.cookieService.get('tm-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`
    });
  }


}
