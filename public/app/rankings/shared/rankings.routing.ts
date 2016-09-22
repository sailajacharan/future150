import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from '../../site';
import { RankingsComponent } from '../rankings.component';

const rankingsRoutes: Routes = [
  {
    path: ':site',
    component: SiteComponent,
    children: [
      { path: 'rankings', component: RankingsComponent }
    ]
  }
];

export const rankingsRouting = RouterModule.forChild(rankingsRoutes);
