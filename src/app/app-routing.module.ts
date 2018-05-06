import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NewsPageComponent } from './component/news-page/news-page.component';
import { DetailItemComponent } from './component/detail-item/detail-item.component';
import { SectionComponent } from './component/section/section.component'
import { NewsListPageComponent} from './component/news-list-page/news-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail-real-estate/:id', component: DetailItemComponent },
  { path: 'property/:type/:area', component: SectionComponent },
  { path: 'news-list/:category', component: NewsListPageComponent },
  { path: 'news/:id', component: NewsPageComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
