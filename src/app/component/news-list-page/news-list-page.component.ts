import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../service/news.service';
import { INews, IRealEstate } from '../../interfaces/IEntity';
import { RealEstateService } from '../../service/real-estate.service';
@Component({
  selector: 'app-news-list-page',
  templateUrl: './news-list-page.component.html',
  styleUrls: ['./news-list-page.component.scss']
})
export class NewsListPageComponent implements OnInit {
  realEstateData : IRealEstate[];
  category: string;
  newslist: INews[]
  topics: any[]
  indexOfPage: number = 0;
  numOfPage: number = 10;
  constructor(
    private route: ActivatedRoute,
    private realEstateService: RealEstateService,
    private newsService: NewsService
  ) { 
      this.realEstateService.getAllData().subscribe( data => this.realEstateData = data)
      this.route.params.subscribe( params => {
        this.category = params.category
        console.log(this.category)
        this.newsService.getNewsByCategory('market').subscribe( data => {
          this.newslist = data
        })
        this.topics = this.newsService.getTopics()
      });

  }

  ngOnInit() {
  }

  changePage(isNext: boolean) {
    if(isNext && this.indexOfPage < this.numOfPage){
      this.indexOfPage += 1;
    }
    if(!isNext && this.indexOfPage > 0) {
      this.indexOfPage -= 1;
    }
    console.log(this.indexOfPage)
  }
}
