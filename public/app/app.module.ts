import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { appRouting } from './app.routing';
import { DashboardComponent } from './dashboard';
import { AdminComponent } from './admin';
import {
  AppComponent,
  CampsModule,
  CommonModule,
  ContactUsModule,
  HomeModule,
  LoginModule,
  MainNavigationComponent,
  MainFooterComponent,
  MessageBoardsModule,
  NewsModule,
  RankingsModule,
  TournamentsModule,
  SearchComponent,
  ShopModule,
  SiteComponent,
  TopNavigationComponent,
  CurrentSiteService,
  AdminNavigationComponent
} from './shared';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    appRouting,
    CommonModule,
    HomeModule,
    ContactUsModule,
    LoginModule,
    RankingsModule,
    NewsModule,
    CampsModule,
    TournamentsModule,
    MessageBoardsModule,
    ShopModule
  ],
  declarations: [
    AppComponent,
    SiteComponent,
    TopNavigationComponent,
    MainNavigationComponent,
    AdminNavigationComponent,
    MainFooterComponent,
    SearchComponent,
    DashboardComponent,
    AdminComponent
  ],
  providers: [
    CurrentSiteService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
