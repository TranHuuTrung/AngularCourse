import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class JwtserviceService {
  private storageSub = new Subject<any>();
  constructor() { }
  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }
  getToken(): String {
    if (!window.localStorage['jwtToken']) {
      return null;
    }
    return window.localStorage['jwtToken'];
  }
  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }
  getUserId() {
    return window.localStorage['userId'];
  }
  saveUserId(id: number) {
    window.localStorage['userId'] = id;
  }
  getUserObj(): any {
    return JSON.parse(window.localStorage['userObj']);
  }
  saveUserObj(user: any) {
    window.localStorage['userObj'] = JSON.stringify(user);
  }
  destroyToken() {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('jwtToken');
  }
}
