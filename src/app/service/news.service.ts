import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
 
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
  getNewsByPageAndCategory(category: string, page: number): Observable<any> {
    let Params = new HttpParams();
    Params = Params.append('page', page.toString());
    Params = Params.append('pagesize', Constant.PAGE_SIZE.toString());
    Params = Params.append('category', category);
    // return this.http.get<any>(Constant.SERVER + "news/get/page", { params: Params });
    return this.http.get<any>(Constant.SERVER + 'news/get/page' + '?page=' + page + '&pagesize=' + Constant.PAGE_SIZE + '&category=' + category);
  }
  getTopics(): any[] {
    return Data.TOPICS;
  }
  getNewsMostView(): Observable<INews[]> {
    return this.http.get<INews[]>(Constant.SERVER + 'news/get/mostview');
  }
}
