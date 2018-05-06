import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-news-list-page',
  templateUrl: './news-list-page.component.html',
  styleUrls: ['./news-list-page.component.scss']
})
export class NewsListPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => console.log(params.category) );
  }

}
