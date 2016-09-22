import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from '../../site';
import { TournamentsComponent } from '../tournaments.component';

const tournamentsRoutes: Routes = [
  {
    path: ':site',
    component: SiteComponent,
    children: [
      { path: 'tournaments', component: TournamentsComponent }
    ]
  }
];

export const tournamentsRouting = RouterModule.forChild(tournamentsRoutes);
