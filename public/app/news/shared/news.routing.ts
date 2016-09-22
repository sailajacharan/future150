import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../../admin';
import { SiteComponent } from '../../site';
import { NewsComponent } from '../news.component';
import { ArticleComponent } from '../article';
import { ArticlesAdminComponent } from '../articles-admin';

const newsRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'articles', component: ArticlesAdminComponent }
    ]
  },
  {
    path: ':site',
    component: SiteComponent,
    children: [
      { path: 'news', component: NewsComponent },
      { path: 'article/:slug', component: ArticleComponent }
    ]
  }
];

export const newsRouting: ModuleWithProviders = RouterModule.forChild(newsRoutes);
