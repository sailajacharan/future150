import { Component, Input } from '@angular/core';

import { CurrentSiteService, Site } from '../../site';
import { Article } from '../shared';

@Component({
    selector: 'f150-article-detail',
    templateUrl: '/app/news/article-detail/article-detail.component.html',
    styleUrls: [
        'app/news/article-detail/article-detail.component.css'
    ]
})
export class ArticleDetailComponent {
    @Input()
    public article: Article;
    @Input()
    public defaultArticleImageUrl: string;
    public selectedSite: Site = <Site>{};

  public constructor(
    private currentSiteService: CurrentSiteService
  ) {
    this.currentSiteService.currentSite
      .subscribe((currentSite: Site) => {
        this.selectedSite = currentSite;
      });
  }
}
