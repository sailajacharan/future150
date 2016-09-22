import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { newsRouting } from './news.routing';
import { ArticlesService } from './articles.service';
import { NewsComponent } from '../news.component';
import { ArticleComponent } from '../article';
import { ArticleJumbotronComponent } from '../article-jumbotron';
import { ArticleJumbotronAltComponent } from '../article-jumbotron-alt';
import { ArticleDetailComponent } from '../article-detail';
import { ArticlesPanelComponent } from '../articles-panel';
import { ArticleAdminComponent } from '../article-admin';
import { ArticlesAdminComponent } from '../articles-admin';
import { CommonModule, ErrSrcDirective } from '../../shared';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    newsRouting
  ],
  declarations: [
    NewsComponent,
    ArticleComponent,
    ArticleJumbotronComponent,
    ArticleJumbotronAltComponent,
    ArticleDetailComponent,
    ArticlesPanelComponent,
    ArticleAdminComponent,
    ArticlesAdminComponent
  ],
  providers: [
    ArticlesService
  ],
  exports: [
    ArticleJumbotronComponent,
    ArticleJumbotronAltComponent,
    ArticlesPanelComponent
  ]
})
export class NewsModule { }
