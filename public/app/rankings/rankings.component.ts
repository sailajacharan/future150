import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { RankingsService } from './shared/rankings.service';

@Component({
  templateUrl: '/app/rankings/rankings.component.html'
})
export class RankingsComponent {
  public visiblePlayersCount = 10;
  public rankings: any[] = [];
  public selectedRanking: any = {};
  public selectedSite: any = {};

  public constructor(
    private titleService: Title,
    private rankingsService: RankingsService
  ) {
    titleService.setTitle('National Rankings | Future150');
    this.activate();
  }

  private activate(): void {
    this.rankingsService.getAll('national')
      .subscribe(result => {
        this.rankings = result.rankings;
        this.selectRankings(this.rankings[0]._id);
      });
  }

  public selectRankings(id) {
    this.rankingsService.getById(id)
      .subscribe(ranking => {
        this.selectedRanking = ranking;
      });
  }
}
