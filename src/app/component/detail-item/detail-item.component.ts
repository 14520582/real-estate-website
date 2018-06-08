import { Component, OnInit } from '@angular/core';
import { IRealEstate } from '../../interfaces/IEntity';
import { Data } from '../../utils/data';
import * as moment from 'moment';
import { RealEstateService } from '../../service/real-estate.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {
  item : IRealEstate;
  date : string;
  itemBased: IRealEstate[];
  realEstateData : IRealEstate[];
  constructor(
    private route: ActivatedRoute,
    private realEstateService: RealEstateService
  ) {
    this.item = Data.ALL_REAL_ESTATE[0];
    moment.locale("vi")
    let value : string = moment(moment.now()).format('dddd, Do/MM/YYYY | HH:MM');
    this.date =  value.charAt(0).toUpperCase() + value.slice(1);
    this.realEstateService.getAllData().subscribe( data => this.realEstateData = data)
    this.route.params.subscribe( params => {
      window.scroll(0, 0);
      this.realEstateService.getById(params.id).subscribe( data => {
        this.item = data;
      })
      this.realEstateService.getItemBased(params.id).subscribe( data => {
        this.itemBased = data;
      })
     console.log(params.id)
    });
  }
  ngOnInit() {
  }

}
