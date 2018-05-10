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
  area: string;
  type: string;
  constructor(
    private route: ActivatedRoute,
    private realEstateService: RealEstateService
  ) {
    this.route.params.subscribe( params => {
      this.area = params.area;
      this.type = params.type;
      this.realEstateService.getAllData().subscribe( data => this.realEstateData = data)
    });
  }

  ngOnInit() {
  }

}
