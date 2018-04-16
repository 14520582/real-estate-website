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
@NgModule({
  declarations: [
    SideNavComponent,
    MainNavComponent,
    TabFilterComponent,
    NavComponent,
    ScrollHeaderDirective,
    RealEstateCardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
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
    NavComponent
  ]
})
export class SharedModule { }
