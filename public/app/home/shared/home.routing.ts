import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home.component';

export const homeRoutes: Routes = [
  { path: ':site', component: HomeComponent, pathMatch: 'full' }
];

export const homeRouting = RouterModule.forChild(homeRoutes);
