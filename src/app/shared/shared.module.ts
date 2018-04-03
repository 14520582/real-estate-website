import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import {CdkTableModule} from '@angular/cdk/table';
import { TabFilterComponent } from './tab-filter/tab-filter.component';

@NgModule({
  declarations: [
    SideNavComponent,
    MainNavComponent,
    TabFilterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
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
    CdkTableModule
  ]
})
export class SharedModule { }
