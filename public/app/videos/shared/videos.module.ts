import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NewsModule } from '../../news';
import { videosRouting } from './videos.routing';
import { VideosComponent } from '../videos.component';
import { VideosPanelComponent } from '../videos-panel';
import { VideosAdminComponent } from '../videos-admin';
import { VideosService } from './videos.service';

@NgModule({
  imports: [
    BrowserModule,
    NewsModule,
    videosRouting
  ],
  declarations: [
    VideosComponent,
    VideosPanelComponent,
    VideosAdminComponent
  ],
  providers: [
    VideosService
  ],
  exports: [
    VideosPanelComponent
  ]
})
export class VideosModule {}
