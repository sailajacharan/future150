import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { Site, CurrentSiteService } from '../../site';
import { future150Config } from '../../config';
import { TournamentsService } from '../../tournaments';
import { CampsService } from '../../shared';

@Component({
  selector: 'f150-main-navigation',
  template: require('./main-navigation.component.html'),
  styleUrls: [
    require('./main-navigation.component.scss').toString()
  ]
})
export class MainNavigationComponent {
  public sites: Site[];
  public selectedSite: Site = <Site>{};
  public expandSearch: boolean = false;
  public campsCount: number = 0;
  public tournamentsCount: number = 0;
  public q: string = '';

  public constructor(
    private router: Router,
    private currentSiteService: CurrentSiteService,
    private campsService: CampsService,
    private tournamentsService: TournamentsService
  ) {
    this.sites = future150Config.sites;
    this.activate();
    this.currentSiteService.currentSite
      .subscribe((currentSite: Site) => {
        this.selectedSite = currentSite;
      });
  }

  public search(): void {
    if (this.q) {
      let navigationExtras: NavigationExtras = {
        queryParams: { q: this.q }
      };
      this.router.navigate([this.selectedSite.path + '/search'], navigationExtras);
      this.q = '';
    }
  }

  private activate(): void {
    this.campsService.getAll()
      .subscribe(result => {
        this.campsCount = result.count;
      });
    this.tournamentsService.getAll()
      .subscribe(result => {
        this.tournamentsCount = result.count;
      });
  }
}
