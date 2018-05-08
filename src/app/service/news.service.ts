import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators'

import { INews } from '../interfaces/IEntity'
import { Constant } from '../utils/constant'
import { Data } from '../utils/data'

@Injectable()
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  getNewsByCategory(category: string): Observable<INews[]> {
    return this.http.get<INews[]>(Constant.URL_GET_NEWS);
  }

  getTopics(): any[] {
    return Data.TOPICS;
  }
}
