import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from '../../site';
import { ShopComponent } from '../shop.component';

const shopRoutes: Routes = [
  {
    path: ':site',
    component: SiteComponent,
    children: [
      { path: 'shop', component: ShopComponent }
    ]
  }
];

export const shopRouting = RouterModule.forChild(shopRoutes);
