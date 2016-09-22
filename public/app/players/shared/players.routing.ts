import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../../admin';
import { SiteComponent } from '../../site';
import { PlayersAdminComponent } from '../players-admin';
import { PlayerAdminComponent } from '../player-admin';
import { ProfileComponent } from '../profile.component';

const playersRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'players', component: PlayersAdminComponent },
      { path: 'player', component: PlayerAdminComponent },
      { path: 'player/:id', component: PlayerAdminComponent }
    ]
  },
  {
    path: ':site',
    component: SiteComponent,
    children: [
      { path: 'player/:slug', component: ProfileComponent }
    ]
  }
];

export const playersRouting = RouterModule.forRoot(playersRoutes);
