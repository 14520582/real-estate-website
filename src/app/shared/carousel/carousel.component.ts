import { Component, OnInit, Input } from '@angular/core';
import { RealEstateService } from '../../service/real-estate.service';
import {IRealEstate} from '../../interfaces/IEntity'
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() category : string;
  realEstateData : IRealEstate[];
  data : string;
  constructor(private realEstateService: RealEstateService) {
  }
  ngOnInit() {
    this.realEstateService.getAllData().subscribe( data => this.realEstateData = data)
  }

}
