import { Component, OnInit, Input } from '@angular/core';
import { IRealEstate } from '../../interfaces/IEntity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-real-estate-card',
  templateUrl: './real-estate-card.component.html',
  styleUrls: ['./real-estate-card.component.scss']
})
export class RealEstateCardComponent implements OnInit {
  @Input() item : IRealEstate;
  constructor(private router: Router) { }
  ngOnInit() {
  }
  navigateDetailComponent() {
    this.router.navigate(['/detail-item/', this.item.id]);
  }
}
