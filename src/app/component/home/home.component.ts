import { Component, OnInit } from '@angular/core';
import { RealEstateService } from '../../service/real-estate.service';
import {IRealEstate} from '../../interfaces/IEntity'
import {Data} from '../../utils/data'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  realEstateData : IRealEstate[];
  data : string;
  newList: IRealEstate[];
  constructor(private realEstateService: RealEstateService) {
  }
  ngOnInit() {
    this.realEstateService.getAllData().subscribe( data => this.realEstateData = data)
    this.realEstateService.getNewList(4).subscribe ( data => this.newList = data)
  }

}
