import { JwtserviceService } from './jwtservice.service';
import { Injectable } from '@angular/core';

import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable()
export class ApiService {
  constructor(
    private jwtService: JwtserviceService,
    private http: HttpClient,
    private router: Router,
  ) { }

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    
    if (this.jwtService.getToken()) {
      headersConfig['Authorization'] = `${this.jwtService.getToken()}`;
    }
    return new HttpHeaders(headersConfig);
  }
  private formatErrors(error: any) {
    console.log(error);
    if (error.status === 401) {
      this.router.navigate(['/login']);
    }
    return Observable.throw(error.json());
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { headers: this.setHeaders() })
      .catch(err => this.formatErrors(err))
      .map((res: HttpResponse<any>) => res);
  }



  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
      .catch(err => this.formatErrors(err))
      .map((res: HttpResponse<any>) => res);
  }

}
