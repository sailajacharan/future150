import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { TournamentsService } from './shared/tournaments.service';

@Component({
  templateUrl: '/app/tournaments/tournaments.component.html',
  styleUrls: [
    'app/tournaments/tournaments.component.css'
  ]
})
export class TournamentsComponent {
  public page = 1;
  public pageSize = 9;
  public tournaments: any[];

  public constructor(
    private titleService: Title,
    private tournamentsService: TournamentsService
  ) {
    titleService.setTitle('Tournaments | Future150');
    this.activate();
  }

  private activate(): void {
    this.tournamentsService.getAll(null, this.page, this.pageSize)
      .subscribe(result => {
        this.tournaments = result.tournaments;
      });
  }
}
