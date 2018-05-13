import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Data } from '../../utils/data'
@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  realEstateForm: FormGroup;
  cities: string[] = Data.cities;
  districts: string[] = Data.districts;
  wards: string[] = Data.wards;
  directions: string[] = Data.directions;
  floors: string[] = Data.floors;
  checked: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.realEstateForm = this.formBuilder.group({
      form: [0, Validators.required],
      type: [0, Validators.required],
      city: ['Hồ Chí Minh', Validators.required],
      district: ['Quận 1', Validators.required],
      ward: ['Phường 2', Validators.required],
      no: ['', Validators.required],
      street: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      license: [0, Validators.required],
      price: [0, Validators.required],
      area: ['', Validators.required],
      length: ['', Validators.required],
      width: ['', Validators.required],
      floor: ['', Validators.required],
      direction: ['all', Validators.required],
      numberOfBedRoom: ['', Validators.required],
      numberOfBathRoom: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
}
