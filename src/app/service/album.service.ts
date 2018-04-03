import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators'

import {IAlbum} from '../interfaces/IEntity'
import {Constant} from '../utils/constant'
import {Data} from '../utils/data'
@Injectable()
export class AlbumService{
  constructor(private http: HttpClient) {
  }
  getAllAlbums(): IAlbum[] {
    return Data.ALL_ALBUMS;
  }
}
