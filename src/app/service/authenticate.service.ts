import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators'
import * as fromRoot from '../reducers';
import * as user from '../actions/user.action';
import { Store } from '@ngrx/store';
import {Constant} from '../utils/constant'
import { IUser } from '../interfaces/IEntity';

@Injectable()
export class AuthenticateService{
  constructor(
    private store: Store<fromRoot.State>,
    private http: HttpClient
  ) {

  }
  login(username: string, password: string) : Observable<IUser> {
    const body = {
      "username": username,
      "password": password
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<IUser>(Constant.API_PREFIX + 'login', body, httpOptions)
  }
}
