import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsPanelComponent } from '../events-panel';
import { EventJumbotronComponent } from '../event-jumbotron';
import { EventsService } from './events.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsPanelComponent,
    EventJumbotronComponent
  ],
  providers: [
    EventsService
  ],
  exports: [
    EventsPanelComponent,
    EventJumbotronComponent
  ]
})
export class EventsModule {}
