import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators'
import {Constant} from '../utils/constant'
import { IUser } from '../interfaces/IEntity';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  public logged: boolean = false;
  myStorage = window.localStorage;
  public userInfo: BehaviorSubject<any>;
  constructor(
    private http: HttpClient
  ) {
    this.userInfo = new BehaviorSubject(null);
  }
  checkLogin() {
    let data = this.myStorage.getItem('userInfo');
    if(data){
      this.logged = true;
      // this.userInfo.next(JSON.parse(data));
    }
    else
      this.logged = false;
  }

  login(username: string, password: string) {
    const body = {
      "username": username,
      "password": password
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<IUser>(Constant.SERVER + 'login', body, httpOptions).subscribe( res => {
      console.log(res)
      this.myStorage.setItem('userInfo', res.toString());
      this.logged = true;
      this.userInfo.next(res);
    })
  }

  logout() {
    this.myStorage.removeItem('userInfo')
    this.logged = false;
    this.userInfo.next(null);
  }
}
