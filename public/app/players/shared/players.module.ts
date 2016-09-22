import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { playersRouting } from './players.routing';
import { PlayerDetailComponent } from '../player-detail';
import { ProfileComponent } from '../profile.component';
import { TrendingPlayersPanelComponent } from '../trending-players-panel';
import { PlayerAdminComponent } from '../player-admin';
import { PlayersAdminComponent } from '../players-admin';
import { PlayersService } from './players.service';
import { CommonModule } from '../../shared';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    playersRouting
  ],
  declarations: [
    PlayerDetailComponent,
    ProfileComponent,
    TrendingPlayersPanelComponent,
    PlayerAdminComponent,
    PlayersAdminComponent
  ],
  providers: [
    PlayersService
  ],
  exports: [
    PlayerDetailComponent,
    TrendingPlayersPanelComponent
  ]
})
export class PlayersModule {}
