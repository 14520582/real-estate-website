import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RealEstateService } from '../service/real-estate.service';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsListPageComponent } from './news-list-page/news-list-page.component';
import { NewsService } from '../service/news.service';
import { PostPageComponent } from './post-page/post-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthService } from '../service/auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { CallDialogComponent } from './call-dialog/call-dialog.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
      HomeComponent, 
      LoginComponent,
      LayoutComponent,
      DetailItemComponent,
      FooterComponent,
      SectionComponent,
      NewsPageComponent,
      ProfileComponent,
      SignUpComponent,
      NewsListPageComponent,
      PostPageComponent,
      AboutComponent,
      ContactComponent,
      ConfigComponent,
      CallDialogComponent
  ],
  entryComponents: [SignUpComponent, CallDialogComponent, ConfigComponent],
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
    FooterComponent,
    CallDialogComponent,
    PostPageComponent,
    ConfigComponent,
    ProfileComponent,
    SignUpComponent,
  ],
  providers: [RealEstateService, NewsService, AuthService],
})
export class MainModule { }