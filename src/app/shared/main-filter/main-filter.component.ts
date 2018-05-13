import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Data } from '../../utils/data'
@Component({
  selector: 'app-main-filter',
  templateUrl: './main-filter.component.html',
  styleUrls: ['./main-filter.component.scss']
})
export class MainFilterComponent implements OnInit {

  districts: string[] = Data.districts;

  cities: string[] = Data.cities;

  wards: string[] = Data.wards;

  types: string[] = Data.types;

  directions: string[] = Data.directions;

  floors: string[] = Data.floors;

  prices: any[] = Data.prices;

  isExpanded: boolean = false;
  filterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.filterForm = this.formBuilder.group({
      city: ['all', Validators.required],
      district: ['all', Validators.required],
      ward: ['all', Validators.required],
      type: ['all', Validators.required],
      price: [0, Validators.required],
      area: [0, Validators.required],
      floor: ['all', Validators.required],
      direction: ['all', Validators.required],
      numberOfBedRoom: [1, Validators.required],
      numberOfBathRoom: [1, Validators.required]
    });
  }

  ngOnInit() {
  }
  expand(){
    this.isExpanded = !this.isExpanded;
  }
}
