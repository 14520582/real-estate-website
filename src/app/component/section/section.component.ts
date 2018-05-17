import { Component, OnInit, Input } from '@angular/core';
import { IRealEstate } from '../../interfaces/IEntity';
import { ActivatedRoute } from '@angular/router';
import { RealEstateService } from '../../service/real-estate.service';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  realEstateData : IRealEstate[];
  district: string;
  form: number;
  constructor(
    private route: ActivatedRoute,
    private realEstateService: RealEstateService
  ) {
    this.route.params.subscribe( params => {
      this.realEstateData = [];
      this.district = params.district;
      this.form = params.form;
      if(params.district)
        this.realEstateService.getByDistrictAndForm(this.district, this.form).subscribe( data => this.realEstateData = data)
    });
  }

  ngOnInit() {
  }

}
