import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../component/login/login.component';
import { CallDialogComponent } from '../../component/call-dialog/call-dialog.component';

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
    private matDialog: MatDialog
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
    this.matDialog.open(LoginComponent)

  }
  openCallDialog(){
    this.matDialog.open(CallDialogComponent).disableClose = true;

  }
  toProfile() {
    this.router.navigate(['/profile']);
  }
  logout(){
    // this.router.navigate(['']);
    this.authService.logout()
  }
}
