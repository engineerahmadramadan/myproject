
import { RouterModule , Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatchesService } from './services/matches.service';
import { NewsService } from './services/news.service';
//import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { ViewmatchesComponent } from './components/viewmatches/viewmatches.component';
import { AddmatchComponent } from './components/addmatch/addmatch.component';
import { EditmatchComponent } from './components/editmatch/editmatch.component';
import { DeletematchComponent } from './components/deletematch/deletematch.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewnewsComponent } from './components/viewnews/viewnews.component';
import { EditnewsComponent } from './components/editnews/editnews.component';
import { DetailsviewComponent } from './components/detailsview/detailsview.component';
import { DetailsmatchComponent } from './components/detailsmatch/detailsmatch.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingComponent } from './components/setting/setting.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AddnewsComponent } from './components/addnews/addnews.component';

// import {map} from 'rxjs/operators';
// import {Observable, of, from } from 'rxjs';

//DetailsviewComponent
const appRoutes: Routes = [
  {path: 'home', component: ViewmatchesComponent},
  {path: 'matches', component: ViewmatchesComponent},
  {path: 'addmatch', component: AddmatchComponent},
  {path: 'editmatch', component: EditmatchComponent},
  {path: 'deletemaatch', component: DeletematchComponent},
  { path: 'news', component: ViewnewsComponent},
  {path: 'editnews', component: EditnewsComponent},
  {path: 'matchdetails', component: DetailsviewComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'setting', component: SettingComponent},
  {path: 'pageerror', component: PagenotfoundComponent},
  {path: 'detailsview/:id', component: DetailsviewComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ViewmatchesComponent,
    AddmatchComponent,
    EditmatchComponent,
    DeletematchComponent,
    NavbarComponent,
    ViewnewsComponent,
    EditnewsComponent,
    DetailsviewComponent,
    DetailsmatchComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    SettingComponent,
    PagenotfoundComponent,
    AddnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule],
  providers: [
    NewsService,
    MatchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
