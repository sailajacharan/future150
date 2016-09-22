import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { campsRouting } from './camps.routing';
import { CampsComponent } from '../camps.component';
import { CampsAdminComponent } from '../camps-admin';
import { CampsService } from './camps.service';
import { CommonModule } from '../../common';
import { EventsModule } from '../../events';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    EventsModule,
    campsRouting
  ],
  declarations: [
    CampsComponent,
    CampsAdminComponent
  ],
  providers: [
    CampsService
  ]
})
export class CampsModule {}
