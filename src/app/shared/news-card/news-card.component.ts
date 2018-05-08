import { Component, OnInit, Input } from '@angular/core';
import { INews } from '../../interfaces/IEntity';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() news: INews
  constructor() { }

  ngOnInit() {
  }

}
