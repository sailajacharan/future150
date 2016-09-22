import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from '../../site';
import { AdminComponent } from '../../admin';
import { CampsComponent } from '../camps.component';
import { CampsAdminComponent } from '../camps-admin';

const campsRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'camps',  component: CampsAdminComponent }
    ]
  },
  {
    path: ':site',
    component: SiteComponent,
    children: [
      { path: 'camps',  component: CampsComponent }
    ]
  }
];

export const campsRouting = RouterModule.forChild(campsRoutes);
