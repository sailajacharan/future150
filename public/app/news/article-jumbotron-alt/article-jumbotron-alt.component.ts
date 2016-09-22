import { Component, Input } from '@angular/core';

import { CurrentSiteService, Site } from '../../site';
import { future150Config } from '../../config';
import { Article } from '../../news/shared/article.model';
import { ArticlesService } from '../../news/shared/articles.service';

@Component({
    selector: 'f150-article-jumbotron-alt',
    templateUrl: '/app/news/article-jumbotron-alt/article-jumbotron-alt.component.html',
    styleUrls: [
        'app/news/article-jumbotron-alt/article-jumbotron-alt.component.css'
    ]
})
export class ArticleJumbotronAltComponent {
    public article: Article = new Article();
    public defaultArticleImageUrl: string = future150Config.defaultArticleImageUrl;
    public selectedSite: Site;

  public constructor(
    private currentSiteService: CurrentSiteService,
    private articlesService: ArticlesService
  ) {
    //this.selectedSite = this.currentSiteService.getSite();
    this.activate();
  }

  private activate(): void {
    this.articlesService.getAll()
      .subscribe(result => {
        this.article = result.articles[0];
      });
  }
}
