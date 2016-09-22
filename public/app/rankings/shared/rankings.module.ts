import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { rankingsRouting } from './rankings.routing';
import { RankingsComponent } from '../rankings.component';
import { NationalRankingsPanelComponent } from '../national-rankings-panel';
import { RankingsService } from './rankings.service';
import { NewsModule } from '../../news';
import { PlayersModule } from '../../players';

@NgModule({
  imports: [
    BrowserModule,
    PlayersModule,
    NewsModule,
    rankingsRouting
  ],
  declarations: [
    RankingsComponent,
    NationalRankingsPanelComponent
  ],
  providers: [
    RankingsService
  ],
  exports: [
    NationalRankingsPanelComponent
  ]
})
export class RankingsModule { }
