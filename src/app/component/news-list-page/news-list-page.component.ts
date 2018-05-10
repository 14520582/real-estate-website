import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../service/news.service';
import { INews } from '../../interfaces/IEntity';
@Component({
  selector: 'app-news-list-page',
  templateUrl: './news-list-page.component.html',
  styleUrls: ['./news-list-page.component.scss']
})
export class NewsListPageComponent implements OnInit {

  category: string;
  newslist: INews[]
  topics: any[]

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { 
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

}
