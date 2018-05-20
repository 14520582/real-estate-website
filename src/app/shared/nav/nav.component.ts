import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../component/login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  userInfo: any;
  constructor(
    private router: Router,
    private authService: AuthService,
    private loginDialog: MatDialog
  ) { 
    this.authService.userInfo.subscribe(data => {
      this.userInfo = data;
      console.log(data)
    })
  }


  ngOnInit() {
  }

  navigateToNewsList(category) {
    this.router.navigate(['/news-list/', category]);
  }
  openLoginScreen(){
    this.loginDialog.open(LoginComponent)

  }
  logout(){
    this.authService.logout()
  }
}
