import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticlesService } from '../shared/articles.service';

interface IArticleGetBySlugRouteParams {
  slug: string;
}

@Component({
  templateUrl: '/app/news/article/article.component.html',
  styleUrls: [
    'app/news/article/article.component.css'
  ]
})
export class ArticleComponent implements OnInit, OnDestroy {
  private paramsSub: any;
  public article: any = {};

  public constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.paramsSub = this.route.params
      .subscribe(params => {
        let articleGetBySlugRouteParams: IArticleGetBySlugRouteParams = <any>params;
        this.articlesService.getBySlug(articleGetBySlugRouteParams.slug)
          .subscribe(result => {
            this.article = result;
          });
      });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
