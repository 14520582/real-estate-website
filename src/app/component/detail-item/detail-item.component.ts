import { Component, OnInit } from '@angular/core';
import { IRealEstate } from '../../interfaces/IEntity';
import { Data } from '../../utils/data';
import * as moment from 'moment';
@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {
  item : IRealEstate;
  date : string;
  constructor() {
    this.item = Data.ALL_REAL_ESTATE[0];
    moment.locale("vi")
    let value : string = moment(moment.now()).format('dddd, Do/MM/YYYY | HH:MM');
    this.date =  value.charAt(0).toUpperCase() + value.slice(1);
   }
  ngOnInit() {
  }

}
