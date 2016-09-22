import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { tournamentsRouting } from './tournaments.routing';
import { TournamentsComponent } from '../tournaments.component';
import { TournamentsService } from './tournaments.service';
import { EventsModule } from '../../events';

@NgModule({
  imports: [
    BrowserModule,
    EventsModule,
    tournamentsRouting
  ],
  declarations: [
    TournamentsComponent
  ],
  providers: [
    TournamentsService
  ]
})
export class TournamentsModule {}
