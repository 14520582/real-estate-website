import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ILoginFormErrors} from '../../interfaces/IEntity';
import {Subscription} from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import { catchError, map, tap } from 'rxjs/operators'
import { MatDialogRef, MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as user from '../../actions/user.action'
import { AuthService } from '../../service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SignUpComponent } from '../sign-up/sign-up.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string = '';  
  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    private formBuilder: FormBuilder,
    public matDialog: MatDialog,
    private store: Store<fromRoot.State>,
    private authService: AuthService
  ) {
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authService.error.subscribe( error => {
      this.error = error
    })
  }
  onLogin() {
    this.authService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
  }
  openSignUpDialog(){
    this.matDialog.open(SignUpComponent)
  }
  ngOnDestroy() {
  }
}
