import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../../component/login/login.component'
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromUser from '../../reducers/user.reducer';
import * as user from '../../reducers/user.reducer'
import { Observable } from 'rxjs/Observable';
import { IUser } from '../../interfaces/IEntity';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @Output() onMenuClick = new EventEmitter<any>();
  userInfo : any
  constructor(
    private store: Store<fromUser.State>,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.userInfo = this.store.select(user.getUserInfo)
    console.log(this.userInfo)
    console.log("sd")
  }

  ngOnInit() {
  }
  goHome(){
    this.router.navigate(['/home']);
  }
  menuClick() {
     this.onMenuClick.emit();
  }
  openLoginDialog(){
    this.dialog.open(LoginComponent);
  }
}
