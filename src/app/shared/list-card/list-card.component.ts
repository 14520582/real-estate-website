import { Component, OnInit, Input } from '@angular/core';
import { INews } from '../../interfaces/IEntity';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {
  @Input() list: INews
  @Input() name: string
  constructor() { }

  ngOnInit() {
  }

}
