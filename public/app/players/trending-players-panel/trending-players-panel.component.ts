import { Component, Input } from '@angular/core';

import { CurrentSiteService, Site } from '../../site';
import { future150Config } from '../../config';
import { PlayersService } from '../shared/players.service';

@Component({
  selector: 'f150-trending-players-panel',
  templateUrl: '/app/players/trending-players-panel/trending-players-panel.component.html',
  styleUrls: [
    'app/players/trending-players-panel/trending-players-panel.component.css'
  ]
})
export class TrendingPlayersPanelComponent {
  @Input()
  public playersPerPage: number = 5;
  @Input()
  public skipFirst: boolean = false;
  @Input()
  public showViewAll: boolean = true;
  public selectedSite: Site;
  public trendingPlayers: any[] = [];
  public visiblePlayersCount: number;
  public isPlayersLoading: boolean = true;
  public defaultProfileImageUrl: string = future150Config.defaultProfileImageUrl;

  public constructor(
    private currentSiteService: CurrentSiteService,
    private playersService: PlayersService
  ) {
    //this.selectedSite = this.currentSiteService.getSite();
    this.visiblePlayersCount = this.playersPerPage;
    this.activate();
  }

  private activate(): void {
    this.playersService.getTrendingPlayers()
      .subscribe(result => {
        this.trendingPlayers = result;
        this.isPlayersLoading = false;
      });
  }

  public showMoreNews() {
    this.visiblePlayersCount += this.playersPerPage;
  }
}
