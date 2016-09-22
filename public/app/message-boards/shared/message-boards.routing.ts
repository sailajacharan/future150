import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from '../../site';
import { MessageBoardsComponent } from '../message-boards.component';

const messageBoardsRoutes: Routes = [
    {
      path: ':site',
      component: SiteComponent,
      children: [
        { path: 'message-boards', component: MessageBoardsComponent }
      ]
    }
];

export const messageBoardsRouting = RouterModule.forChild(messageBoardsRoutes);
