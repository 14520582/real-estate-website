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
import { AuthenticateService } from '../service/authenticate.service';
import { SectionComponent } from './section/section.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsListPageComponent } from './news-list-page/news-list-page.component';
import { NewsService } from '../service/news.service';
import { PostPageComponent } from './post-page/post-page.component';
@NgModule({
  declarations: [
      HomeComponent, 
      LoginComponent,
      LayoutComponent,
      DetailItemComponent,
      FooterComponent,
      SectionComponent,
      NewsPageComponent,
      NewsListPageComponent,
      PostPageComponent
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
    FooterComponent,
    PostPageComponent
  ],
  providers: [RealEstateService, AuthenticateService, NewsService],
})
export class MainModule { }