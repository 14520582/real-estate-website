import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators'

import {IBook} from '../interfaces/IEntity'
import {Constant} from '../utils/constant'

@Injectable()
export class TestService {
  constructor(private http: HttpClient) {
  }
  getAllData(): Observable<IBook[]> {
    return this.http.get<IBook[]>(Constant.URL_GET_ALL_BOOK);
  }
}
