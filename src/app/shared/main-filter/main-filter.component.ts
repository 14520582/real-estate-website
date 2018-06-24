import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Data } from '../../utils/data'
import { RealEstateService } from '../../service/real-estate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-filter',
  templateUrl: './main-filter.component.html',
  styleUrls: ['./main-filter.component.scss']
})
export class MainFilterComponent implements OnInit {

  districts: any[];

  cities: string[] = Data.cities;

  wards: any[];

  types: number[] = Data.types;

  directions: string[] = Data.directions;

  floors: string[] = Data.floors;

  prices: any[] = Data.prices;

  isExpanded: boolean = false;
  filterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private reService: RealEstateService
  ) {
    this.filterForm = this.formBuilder.group({
      city: [1, Validators.required],
      district: [-1, Validators.required],
      ward: [-1, Validators.required],
      type: [-1, Validators.required],
      price: [0, Validators.required],
      area: [0, Validators.required],
      form: [-1, Validators.required],
      floor: [-1, Validators.required],
      direction: [-1, Validators.required],
      numberOfBedRoom: [-1, Validators.required],
      numberOfBathRoom: [-1, Validators.required]
    });
    this.reService.getDistrictByCity(1).subscribe(dis => {
      this.districts = dis;
    })
  }
  changeDistrict() {
    this.reService.getWardByDistrict(this.filterForm.controls['district'].value).subscribe( w => {
      this.wards = w;
      this.filterForm.controls['ward'].setValue(-1)
    })
  }
  ngOnInit() {
  }
  filter() {
    if (this.filterForm.dirty){
      console.log('filtering')
      let content = '';
      content += 'city:' + this.filterForm.controls['city'].value
      if(this.filterForm.controls['form'].value !== -1)
        content += ',form:' + this.filterForm.controls['form'].value
      if(this.filterForm.controls['district'].value !== -1)
        content += ',district:' + this.filterForm.controls['district'].value
      if(this.filterForm.controls['ward'].value !== -1)
        content += ',ward:' + this.filterForm.controls['ward'].value
      if(this.filterForm.controls['floor'].value !== -1)
        content += ',numoffloor:' + this.filterForm.controls['floor'].value
      if(this.filterForm.controls['direction'].value !== -1)
        content += ',direction:' + this.filterForm.controls['direction'].value
      if(this.filterForm.controls['numberOfBedRoom'].value !== -1){
        if(this.filterForm.controls['numberOfBedRoom'].value == 4)
          content += ',numofbedroom>' + this.filterForm.controls['numberOfBedRoom'].value
        else
          content += ',numofbedroom:' + this.filterForm.controls['numberOfBedRoom'].value
      }
      if(this.filterForm.controls['numberOfBathRoom'].value !== -1){
        if(this.filterForm.controls['numberOfBathRoom'].value == 4)
          content += ',numofbathroom>' + this.filterForm.controls['numberOfBathRoom'].value
        else
          content += ',numofbathroom:' + this.filterForm.controls['numberOfBathRoom'].value
      }
      if(this.filterForm.controls['area'].value !== 0){
          content += ',area<' + this.filterForm.controls['area'].value
      }
      if(this.filterForm.controls['price'].value !== 0){
        if(this.filterForm.controls['price'].value == 10)
          content += ',price>' + this.filterForm.controls['price'].value*1000000
        else
          content += ',price<' + this.filterForm.controls['price'].value*1000000
      }
      if(content !== '')
        this.router.navigate(['/property/', {content: content}]);
    }else{
      console.log('nochange')
    }
  }
  expand(){
    this.isExpanded = !this.isExpanded;
  }
}
