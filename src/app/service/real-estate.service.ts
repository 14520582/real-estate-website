import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';

import {IAlbum, IRealEstate} from '../interfaces/IEntity'
import {Constant} from '../utils/constant'
@Injectable()
export class RealEstateService {
  userId: number;
  constructor(
    private http: HttpClient,
  ) {
  }
  getAllData(): Observable<IRealEstate[]> {
    return this.http.get<IRealEstate[]>(Constant.SERVER + 'property/get/new?limit='+Constant.CAROUSEL_SIZE);
  }
  getNewList(limit: number): Observable<IRealEstate[]> {
    return this.http.get<IRealEstate[]>(Constant.SERVER + 'property/get/new?limit='+limit);
  }
  getByDistrictAndForm(district: string, form: number): Observable<IRealEstate[]> {
    return this.http.get<IRealEstate[]>(Constant.SERVER + 'property/get/' + district + '/' + form);
  }
  filter(content: string, page: number): Observable<any> {
    console.log(Constant.SERVER + 'property/get/filter?page=' + page + '&pagesize=' + Constant.PAGE_SIZE_FILTER + '&content=' + content)
    return this.http.get<any>(Constant.SERVER + 'property/get/filter?page=' + page + '&pagesize=' + Constant.PAGE_SIZE_FILTER + '&content=' + content);
  }
  getDistrictByCity(city: number): Observable<any[]>  {
    return this.http.get<any[]>(Constant.SERVER + 'district/get/' + city);
  }
  getWardByDistrict(district: number): Observable<any[]>  {
    return this.http.get<any[]>(Constant.SERVER + 'district/get/ward/' + district);
  }
  getById(id: string): Observable<IRealEstate> {
    return this.http.get<IRealEstate>(Constant.SERVER + 'property/get/' + id);
  }
  getUserBased(id: number): Observable<IRealEstate[]> {
    return this.http.get<IRealEstate[]>(Constant.SERVER + 'property/get/userbased/' + id);
  }
  getItemBased(id: number): Observable<IRealEstate[]> {
    return this.http.get<IRealEstate[]>(Constant.SERVER + 'property/get/itembased/' + id);
  }
}
