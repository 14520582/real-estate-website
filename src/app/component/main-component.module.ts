import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {HomeComponent} from './home/home.component';
import { RealEstateCardComponent } from './real-estate-card/real-estate-card.component';
import { LoginComponent } from './login/login.component';
import { RealEstateService } from '../service/real-estate.service';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { AuthenticateService } from '../service/authenticate.service';
@NgModule({
  declarations: [
      HomeComponent, 
      RealEstateCardComponent,
      LoginComponent,
      LayoutComponent,
      DetailItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    DetailItemComponent,
  ],
  providers: [RealEstateService, AuthenticateService],
})
export class MainModule { }