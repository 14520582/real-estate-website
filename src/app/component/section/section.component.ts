import { Component, OnInit, Input } from '@angular/core';
import { IRealEstate } from '../../interfaces/IEntity';
import { ActivatedRoute } from '@angular/router';
import { RealEstateService } from '../../service/real-estate.service';
import { PageEvent } from '@angular/material';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  realEstateData : IRealEstate[];
  userBasedItem : IRealEstate[];
  similarZone : IRealEstate[];
  // indexOfPage: number = 0;
  content: string;
  totalOfItems: number = 0;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private realEstateService: RealEstateService
  ) {
    this.route.params.subscribe( params => {
      this.content = params.content
      // this.indexOfPage = 0;
      this.realEstateService.filter(this.content,0).subscribe( data => {
        this.realEstateData = data.content;
        console.log(data.totalElements)
        this.totalOfItems = data.totalElements;
      })
    });
  }
  ngOnInit() {
    this.authService.userInfo.subscribe(userInfo => {
      if(userInfo)
        this.realEstateService.getUserBased(userInfo.id).subscribe( data => this.userBasedItem = data)
    })
    this.realEstateService.getAllData().subscribe( data => this.similarZone = data)
  }
  onPaginateChange(event: PageEvent) {
    this.realEstateService.filter(this.content,event.pageIndex).subscribe( data => {
      this.realEstateData = data.content;
      window.scroll(0,0);
    })
  }
  // changePage(isNext: boolean) {
  //   if(isNext && this.indexOfPage < this.numOfPage){
  //     this.indexOfPage += 1;
  //   }
  //   if(!isNext && this.indexOfPage > 0) {
  //     this.indexOfPage -= 1;
  //   }
  //   this.realEstateService.filter(this.content,this.indexOfPage).subscribe( data => {
  //     this.realEstateData = data.content;
  //   })
  //   console.log(this.indexOfPage)
  // }
}
