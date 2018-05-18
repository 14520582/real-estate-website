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

  constructor(
    private router: Router,
    private authService: AuthService,
    private loginDialog: MatDialog
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
  openLoginScreen(){
    this.loginDialog.open(LoginComponent)
  }
  logout(){
    this.authService.logout()
  }
}
