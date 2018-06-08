import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NewsPageComponent } from './component/news-page/news-page.component';
import { DetailItemComponent } from './component/detail-item/detail-item.component';
import { SectionComponent } from './component/section/section.component'
import { NewsListPageComponent} from './component/news-list-page/news-list-page.component';
import { PostPageComponent } from './component/post-page/post-page.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail-real-estate', component: DetailItemComponent },
  { path: 'property', component: SectionComponent },
  { path: 'news-list/:category', component: NewsListPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'post', component: PostPageComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
