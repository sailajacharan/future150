import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from '../../site';
import { ContactUsComponent } from '../contact-us.component';

const contactUsRoutes: Routes = [
  {
    path: ':site',
    component: SiteComponent,
    children: [
      { path: 'contact-us', component: ContactUsComponent }
    ]
  }
];

export const contactUsRouting = RouterModule.forChild(contactUsRoutes);
