import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import {CdkTableModule} from '@angular/cdk/table';
import { RouterModule, Routes } from '@angular/router';
import { TabFilterComponent } from './tab-filter/tab-filter.component';
import { NavComponent } from './nav/nav.component';
import { ScrollHeaderDirective } from './directives/scroll-header.directive';
import { CarouselComponent } from './carousel/carousel.component';
import { RealEstateCardComponent } from './real-estate-card/real-estate-card.component';
import { MainFilterComponent } from './main-filter/main-filter.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { DateCreatedPipe } from './pipes/date-created.pipe';
import { ListCardComponent } from './list-card/list-card.component';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { AreaFilterPipe } from './pipes/area-filter.pipe';
import { MoneyPipe } from './pipes/money.pipe';
import { DirectionPipe } from './pipes/direction.pipe';
import { TypePipe } from './pipes/type.pipe';
import { AppJssipModule } from '../service/app-jssip/app-jssip.module';

@NgModule({
  declarations: [
    SideNavComponent,
    MainNavComponent,
    TabFilterComponent,
    NavComponent,
    ScrollHeaderDirective,
    RealEstateCardComponent,
    CarouselComponent,
    MainFilterComponent,
    NewsCardComponent,
    DateCreatedPipe,
    ListCardComponent,
    PriceFilterPipe,
    AreaFilterPipe,
    MoneyPipe,
    DirectionPipe,
    TypePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppJssipModule,
    CdkTableModule
  ],
  exports:[
    SideNavComponent,
    MainNavComponent,
    CommonModule,
    TabFilterComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    CarouselComponent,
    RealEstateCardComponent,
    NavComponent,
    NewsCardComponent,
    MainFilterComponent,
    ListCardComponent,
    PriceFilterPipe,
    AreaFilterPipe,
    MoneyPipe,
    AppJssipModule,
    DateCreatedPipe,
    DirectionPipe,
    TypePipe
  ]
  
})
export class SharedModule { }
