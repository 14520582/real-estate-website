import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Output() onMenuClick = new EventEmitter<any>();
  constructor(private router: Router) { }
  goLoginScreen(){
    this.onMenuClick.emit();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
