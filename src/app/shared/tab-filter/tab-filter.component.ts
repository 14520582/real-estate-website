import { Component, OnInit} from '@angular/core';

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
  btnSelected: string = "buy"
  locations = [
    'Quận 1', 'Quận 2', 'Quận 3', 'Quận 5', 'Quận 7', 'Quận 8', 'Quận 9', 'Quận 10',
    'Quận 1', 'Quận 12', 'Bình Thạnh', 'Thủ Đức', 'Gò Vấp', 'Bình Tân', 'Tân Bình', 'Củ Chỉ', 'Hóc Môn',
    'Tân Phú', 'Phú Nhuận'];
  constructor() { }

  ngOnInit() {
  }

  changeOption(type: string){
    this.btnSelected = type
  }

  isActive(type: string) {
    if(type == this.btnSelected)
      return true
    else
      return false
  }
}
