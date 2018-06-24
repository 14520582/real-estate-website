import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RealEstateService } from '../../service/real-estate.service';

@Component({
  selector: 'app-tab-filter',
  templateUrl: './tab-filter.component.html',
  styleUrls: ['./tab-filter.component.scss']
})
export class TabFilterComponent implements OnInit {
  slogan = new Map([
    [0,"Find your way home"],
    [1,"Find your next rental"]
  ]);
  formSelected: number = 0
  areaSelected: number;
  districts: any[];
  constructor(
    private router: Router,
    private realEstateService: RealEstateService
  ) { 
      this.realEstateService.getDistrictByCity(1).subscribe(data=>{
        this.districts = data
      })
  }

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
    if(this.areaSelected)
      this.router.navigate(['/property/', {content: 'form:' + this.formSelected + ',' + 'district:' + this.areaSelected}]);
  }
}
