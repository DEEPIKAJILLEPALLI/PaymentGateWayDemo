import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeApiService {
  anetToken:string='';
  constructor(private http:HttpClient) { }
  apiURL = 'https://localhost:44328/api/';
   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getAuthorizeToken(amount:string) : Observable<any> {
    
    return this.http.get(this.apiURL + '/AuthorizeNet/GetFormToken?amount='+amount);    
  }  
  
  
  getAuthorizeEditPaymentToken() : Observable<any> {
    
    return this.http.get(this.apiURL + '/AuthorizeNet/GetEditPaymentToken');
    
  }  
  


}
