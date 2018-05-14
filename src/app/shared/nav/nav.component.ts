import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router
  ) { }


  ngOnInit() {
  }

  navigateToNewsList(category) {
    this.router.navigate(['/news-list/', category]);
  }
  goPostPage(){
    this.router.navigate(['/post']);
  }
  goAboutPage(){
    this.router.navigate(['/about']);
  }
  goContactPage(){
    this.router.navigate(['/contact']);
  }
}
