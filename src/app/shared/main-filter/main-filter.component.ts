import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-main-filter',
  templateUrl: './main-filter.component.html',
  styleUrls: ['./main-filter.component.scss']
})
export class MainFilterComponent implements OnInit {

  districts = [
    'Quận 1', 
    'Quận 2', 
    'Quận 3',
    'Quận 4',
    'Quận 5',
    'Bình Thạnh',
    'Hóc Môn',
    'Củ Chỉ',
    'Bình Tân',
    'Gò Vấp',
    'Thủ Đức'
  ];

  cities = [
    'Hồ Chí Minh', 
    'Hà Nội',
    'Đà Nẵng'
  ];

  wards = [
    'Phường 2',
    'Phường 3',
    'Phường 4',
    'Phường 5',
    'Phường 6',
  ];

  types = [
    'Nhà riêng',
    'Đất nền',
    'Chung cư'
  ];

  directions= [
    'Đông',
    'Tây',
    'Nam',
    'Bắc'
  ];

  floors = [
    'Chỉ tầng trệt',
    '1',
    '2',
    '3'
  ]

  prices = [
    {value: 0, label: 'Tất cả'},
    {value: 2, label: '< 2 tỷ'},
    {value: 4, label: '< 4 tỷ'},
    {value: 5, label: '< 6 tỷ'},
    {value: 8, label: '< 8 tỷ'},
    {value: 10, label: '< 10 tỷ'},
    {value: 11, label: '10 tỷ +'},
  ]
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
      lowestPrice: ['', Validators.required],
      highestPrice: ['', Validators.required],
      minArea: ['', Validators.required],
      maxArea: ['', Validators.required],
      floor: ['all', Validators.required],
      direction: ['all', Validators.required],
      numberOfBedRoom: ['', Validators.required],
      numberOfBathRoom: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  expand(){
    this.isExpanded = !this.isExpanded;
  }
}
