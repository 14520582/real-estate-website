import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-filter',
  templateUrl: './tab-filter.component.html',
  styleUrls: ['./tab-filter.component.scss']
})
export class TabFilterComponent implements OnInit {
  slogan = new Map([
    ["buy","Find your way home"],
    ["rent","Find your next rental"],
    ["sell","Sell your home"]
  ]);
  typeSelected: string = "buy"
  areaSelected: string = ''
  locations = [
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
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  changeOption(type: string){
    this.typeSelected = type
  }

  isActive(type: string) {
    if(type == this.typeSelected)
      return true
    else
      return false
  }

  toSection(){
    if(this.areaSelected && this.areaSelected != '')
      this.router.navigate(['/property/', this.typeSelected, this.areaSelected]);
  }
}
