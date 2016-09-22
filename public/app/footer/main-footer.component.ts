import { Component } from '@angular/core';

import { Site, CurrentSiteService } from '../site';
import { ArticlesService } from '../news';

@Component({
  selector: 'f150-footer',
  templateUrl: '/app/footer/main-footer.component.html',
  styleUrls: [
    'app/footer/main-footer.component.css'
  ]
})
export class MainFooterComponent {
  public latestArticles: any[] = [];
  public selectedSite: Site = <Site>{};

  public constructor(
    private articlesService: ArticlesService,
    private currentSiteService: CurrentSiteService
  ) {
    this.activate();
    this.currentSiteService.currentSite
      .subscribe((currentSite: Site) => {
        this.selectedSite = currentSite;
      });
  }

  private activate() {
    this.articlesService.getAll()
      .subscribe(result => {
        this.latestArticles = result.articles;
      });
  }
}
