import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { messageBoardsRouting } from './message-boards.routing';
import { MessageBoardsService } from './message-boards.service';
import { MessageBoardsComponent } from '../message-boards.component';

@NgModule({
  imports: [
    BrowserModule,
    messageBoardsRouting
  ],
  declarations: [
    MessageBoardsComponent
  ],
  providers: [
    //MessageBoardsService
  ]
})
export class MessageBoardsModule {}
