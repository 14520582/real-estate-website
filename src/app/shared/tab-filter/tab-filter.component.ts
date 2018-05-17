import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-filter',
  templateUrl: './tab-filter.component.html',
  styleUrls: ['./tab-filter.component.scss']
})
export class TabFilterComponent implements OnInit {
  slogan = new Map([
    [1,"Find your way home"],
    [2,"Find your next rental"]
  ]);
  formSelected: number = 1
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

  changeOption(form: number){
    this.formSelected = form
  }

  isActive(form: number) {
    if(form == this.formSelected)
      return true
    else
      return false
  }

  toSection(){
    if(this.areaSelected && this.areaSelected != '')
      this.router.navigate(['/property/', {form: this.formSelected, district: this.areaSelected}]);
  }
}
