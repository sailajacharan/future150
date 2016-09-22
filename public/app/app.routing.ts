import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  SiteComponent,
  HomeComponent,
  SearchComponent
} from './shared';
import { DashboardComponent } from './dashboard';
import { AdminComponent } from './admin';

const appRoutes: Routes = [
  { path: '', redirectTo: '/hs', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
  {
    path: ':site',
    component: SiteComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'search', component: SearchComponent }
    ]
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
