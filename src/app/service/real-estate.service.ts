import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators'

import {IAlbum, IRealEstate} from '../interfaces/IEntity'
import {Constant} from '../utils/constant'
@Injectable()
export class RealEstateService {
  constructor(private http: HttpClient) {
  }
  getAllData(): Observable<IRealEstate[]> {
    return this.http.get<IRealEstate[]>(Constant.URL_GET_ALL_DATA);
  }
}
