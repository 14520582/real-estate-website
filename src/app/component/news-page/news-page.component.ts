import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../service/news.service';
import { INews, IRealEstate } from '../../interfaces/IEntity';
import { RealEstateService } from '../../service/real-estate.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  news: INews = null;
  realEstateData : IRealEstate[];
  constructor(
    private route: ActivatedRoute,
    private realEstateService: RealEstateService,
    private newsService: NewsService
  ) { 
    // this.realEstateService.getAllData().subscribe( data => this.realEstateData = data)
    this.route.params.subscribe( params => {
      this.newsService.getNewsById(params.id).subscribe(data => {
        this.news = data;
      })
    });
  }

  ngOnInit() {
  }

}
