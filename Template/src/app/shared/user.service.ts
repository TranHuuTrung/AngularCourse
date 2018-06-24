import { Observable } from 'rxjs/Observable';
import { ApiConvertHelper } from './helper/api-convert.helper';
import { JwtserviceService } from './jwtservice.service';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Subject } from 'rxjs/';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operator/map';

@Injectable()
export class UserService {
  private storageSub = new Subject<any>();
  constructor(
    private apiService: ApiService,
    private router: Router,
    private http: HttpClient,
    private jwtService: JwtserviceService,
    private apiConvert: ApiConvertHelper
  ) {}
  setUserName(name: any) {
    window.localStorage.removeItem('username');
    window.localStorage['username'] = name;
    this.storageSub.next(name);
  }
  login(username: string, password: string): Observable<any> {
    const url = `login`;
    return this.apiService.post(url, {
      'username': username,
      'password': password
    }).map( data => {
      console.log(data);
      this.jwtService.saveToken(data.result.token);
      this.jwtService.saveUserId(data.result.userId);
      this.setUserName(data.result.name);
      this.jwtService.saveUserObj(data);
      return data.result;
    });
  }
  logout() {
    const url = `logout`;
    return this.apiService.post(url)
      .map( data => data );
  }
  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }
  getUserName(): Observable<any> {
    return window.localStorage['username'];
  }
  getAccountRequest(id: number): Observable<any> {
    // const url = `users/${id}/customer/demands/13`;
    const url = `users/${id}/dashboard`;
    console.log(url);
    return this.apiService.get(url)
    .map(data => data.result);
  }
  getAccountDetail(userId: number, requestId: number): Observable<any> {
    const url = `users/${userId}/customer/demands/${requestId}`;
    // const url = `users/${id}/dashboard`;
    console.log(url);
    return this.apiService.get(url)
    .map(data => data.result);
  }
  getAccountContractDetail(customerId: number, saleOrderId: number): Observable<any> {
    const url = `customers/${customerId}/sale/${saleOrderId}`;
    return this.apiService.get(url)
      .map( data => data.result);
  }
}
