import { Component, OnInit } from '@angular/core';
import { RealEstateService } from '../../service/real-estate.service';
import {IRealEstate} from '../../interfaces/IEntity'
import {Data} from '../../utils/data'
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  realEstateData : IRealEstate[];
  data : string;
  userBasedItem: IRealEstate[];
  newList: IRealEstate[];
  constructor(
    private realEstateService: RealEstateService,
    private authService: AuthService
  ) {
  }
  ngOnInit() {
    this.realEstateService.getAllData().subscribe( data => this.realEstateData = data)
    this.realEstateService.getNewList(4).subscribe ( data => this.newList = data)
    this.authService.userInfo.subscribe(userInfo => {
      if(userInfo)
        this.realEstateService.getUserBased(userInfo.id).subscribe( data => this.userBasedItem = data)
    })
  }

}
