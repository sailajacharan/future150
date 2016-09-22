import { Component, Input, OnInit } from '@angular/core';

import { CurrentSiteService, Site } from '../../site';
import { future150Config } from '../../config';
import { Article } from '../../news/shared/article.model';
import { ArticlesService } from '../../news/shared/articles.service';

@Component({
  selector: 'f150-article-jumbotron',
  templateUrl: '/app/news/article-jumbotron/article-jumbotron.component.html',
  styleUrls: [
    'app/news/article-jumbotron/article-jumbotron.component.scss'
  ]
})
export class ArticleJumbotronComponent implements OnInit {
  public article: Article = new Article();
  public defaultArticleImageUrl: string = future150Config.defaultArticleImageUrl;
  public selectedSite: Site = <Site>{};

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
    this.articlesService.getFirst(this.selectedSite.path)
      .subscribe(result => {
        this.article = result;
      });
  }
}
