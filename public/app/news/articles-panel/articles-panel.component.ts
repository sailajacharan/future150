import { Component, Input, OnInit } from '@angular/core';

import { CurrentSiteService, Site } from '../../site';
import { future150Config } from '../../config';
import { ArticlesService } from '../../news/shared/articles.service';

@Component({
  selector: 'f150-articles-panel',
  templateUrl: '/app/news/articles-panel/articles-panel.component.html'
})
export class ArticlesPanelComponent implements OnInit {
  public page = 1;
  public pageSize = 10;
  @Input()
  public articlesPerPage: number = 3;
  @Input()
  public skipFirst: boolean = false;
  @Input()
  public showViewAll: boolean = true;
  public selectedSite: Site = <Site>{};
  public articles: any[] = [];
  public visibleArticleCount: number;
  public isNewsLoading: boolean = true;
  public defaultArticleImageUrl: string = future150Config.defaultArticleImageUrl;

  public constructor(
    private currentSiteService: CurrentSiteService,
    private articlesService: ArticlesService
  ) {
    this.currentSiteService.currentSite
      .subscribe((currentSite: Site) => {
        this.selectedSite = currentSite;
      });
  }

  ngOnInit() {
    this.visibleArticleCount = this.articlesPerPage;
    this.articlesService.getAll(this.selectedSite.path, null, this.page, this.pageSize)
      .subscribe(result => {
        this.articles = result.articles;
        this.isNewsLoading = false;
      });
  }

  public showMoreNews() {
    this.visibleArticleCount += this.articlesPerPage;
  }
}
