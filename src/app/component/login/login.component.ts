import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ILoginFormErrors} from '../../interfaces/IEntity';
import {Subscription} from 'rxjs/Subscription';
import { MatDialogRef } from '@angular/material';
import { AuthenticateService } from '../../service/authenticate.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as user from '../../actions/user.action'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginForm: FormGroup;
  sub: Subscription;
  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    private formBuilder: FormBuilder,
    private store: Store<fromRoot.State>,
    private authenticateService: AuthenticateService
  ) {
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    console.log("sdf")
    this.authenticateService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
    .subscribe( userInfo => {
      this.store.dispatch(new user.StoreUser(userInfo))
      console.log(userInfo)
      this.dialogRef.close()
    })
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
