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
    { label: 'Quận 1', value: 'quan-1'}, 
    { label: 'Quận 2', value: 'quan-2'}, 
    { label: 'Quận 3', value: 'quan-3'},
    { label: 'Quận 4', value: 'quan-4'}, 
    { label: 'Quận 5', value: 'quan-5'},
    { label: 'Bình Thạnh', value: 'binh-thanh'},
    { label: 'Hóc Môn', value: 'hoc-mon'},
    { label: 'Củ Chỉ', value: 'cu-chi'},
    { label: 'Bình Tân', value: 'binh-tan'},
    { label: 'Gò Vấp', value: 'go-vap'},
    { label: 'Thủ Đức', value: 'thu-duc'}
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
