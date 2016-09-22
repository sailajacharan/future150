import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from '../../site';
import { AdminComponent } from '../../admin';
import { VideosComponent } from '../videos.component';
import { VideosAdminComponent } from '../videos-admin';

const videosRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'videos',  component: VideosAdminComponent }
    ]
  },
  {
    path: ':site',
    component: SiteComponent,
    children: [
      { path: 'videos',  component: VideosComponent }
    ]
  }
];

export const videosRouting = RouterModule.forChild(videosRoutes);
