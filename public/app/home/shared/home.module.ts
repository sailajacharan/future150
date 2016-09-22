import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { homeRouting } from './home.routing';
import { NewsModule } from '../../news';
import { RankingsModule } from '../../rankings';
import { VideosModule } from '../../videos';
import { PlayersModule } from '../../players';
import { CommonModule, EventsModule } from '../../shared';
import { HomeComponent } from '../home.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NewsModule,
    RankingsModule,
    EventsModule,
    VideosModule,
    PlayersModule,
    //homeRouting
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
