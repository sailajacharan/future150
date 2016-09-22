import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from '../../site';
import { LoginComponent } from '../login.component';

const loginRoutes: Routes = [
  {
    path: ':site',
    component: SiteComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  }
];

export const loginRouting = RouterModule.forChild(loginRoutes);
