import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ILoginFormErrors} from '../../interfaces/IEntity';
import {Subscription} from 'rxjs/Subscription';
import { MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as user from '../../actions/user.action'
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    private formBuilder: FormBuilder,
    private store: Store<fromRoot.State>,
    private authService: AuthService
  ) {
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.authService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
  }

  ngOnDestroy() {
  }
}
