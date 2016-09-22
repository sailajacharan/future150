import { Component } from '@angular/core';

import { Site, CurrentSiteService } from '../../site';
import { future150Config } from '../../config';
import { RankingsService } from '../shared/rankings.service';

@Component({
  selector: 'f150-national-rankings-panel',
  templateUrl: '/app/rankings/national-rankings-panel/national-rankings-panel.component.html',
  styleUrls: [
    'app/rankings/national-rankings-panel/national-rankings-panel.component.css'
  ]
})
export class NationalRankingsPanelComponent {
  public selectedSite: Site;
  public rankings: any[] = [];
  public selectedRanking: any = {};
  public activeRanking: any;
  public visibleRankingPlayerCount: number = 5;
  public isRankingsLoading: boolean = true;
  public defaultProfileImageUrl: string = future150Config.defaultProfileImageUrl;

  public constructor(
    private currentSiteService: CurrentSiteService,
    private rankingsService: RankingsService
  ) {
    //this.selectedSite = this.currentSiteService.getSite();
    this.activate();
  }

  private activate(): void {
    this.rankingsService.getAll('national')
      .subscribe(result => {
        this.rankings = result.rankings;
        this.selectRankings(this.rankings[0]._id);
        this.isRankingsLoading = false;
      });
  }

  public selectRankings(id) {
    this.rankingsService.getById(id)
      .subscribe(ranking => {
        this.selectedRanking = ranking;
      });
  }

  public showMoreRankingPlayers() {
    this.visibleRankingPlayerCount += 5;
  }
}
