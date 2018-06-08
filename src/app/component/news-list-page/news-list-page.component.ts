import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../service/news.service';
import { INews, IRealEstate } from '../../interfaces/IEntity';
import { RealEstateService } from '../../service/real-estate.service';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-news-list-page',
  templateUrl: './news-list-page.component.html',
  styleUrls: ['./news-list-page.component.scss']
})
export class NewsListPageComponent implements OnInit {
  realEstateData : IRealEstate[];
  category: string;
  newsData: INews[];
  mostViewsData: INews[];
  topics: any[]
  indexOfPage: number = 0;
  numOfPage: number = 0;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private realEstateService: RealEstateService,
    private newsService: NewsService
  ) { 
      this.authService.userInfo.subscribe(userInfo => {
        if(userInfo)
          this.realEstateService.getUserBased(userInfo.id).subscribe( data => this.realEstateData = data)
        else
          this.realEstateService.getAllData().subscribe( data => this.realEstateData = data)
      })
      
      this.route.params.subscribe( params => {
        this.category = params.category
        this.indexOfPage = 0;
        this.newsService.getNewsMostView().subscribe( data => {
          this.mostViewsData = data;
        })
        this.newsService.getNewsByPageAndCategory(this.category,0).subscribe( data => {
          this.newsData = data.content;
          this.numOfPage = data.totalPages;
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
    this.newsService.getNewsByPageAndCategory(this.category,this.indexOfPage).subscribe( data => {
      this.newsData = data.content;
    })
    console.log(this.indexOfPage)
  }
}
