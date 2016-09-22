import { Component, Input, OnInit } from '@angular/core';

import { Site, CurrentSiteService } from '../../site';
import { future150Config } from '../../config';
import { VideosService } from '../shared/videos.service';

@Component({
  selector: 'f150-videos-panel',
  templateUrl: '/app/videos/videos-panel/videos-panel.component.html'
})
export class VideosPanelComponent implements OnInit {
  @Input()
  public videosPerPage: number = 3;
  @Input()
  public skipFirst: boolean = false;
  @Input()
  public showViewAll: boolean = true;
  public selectedSite: Site = <Site>{};
  public videos: any[] = [];
  public visibleVideosCount: number;
  public isVideosLoading: boolean = true;
  public defaultVideoImageUrl: string = future150Config.defaultVideoImageUrl;

  public constructor(
    private currentSiteService: CurrentSiteService,
    private videosService: VideosService
  ) {
    this.visibleVideosCount = this.videosPerPage;
    this.activate();
  }

  ngOnInit() {
    this.currentSiteService.currentSite
      .subscribe((currentSite: Site) => {
        this.selectedSite = currentSite;
      });
  }

  private activate(): void {
    this.videosService.getAll()
      .subscribe(result => {
        this.videos = result.videos;
        this.isVideosLoading = false;
      });
  }

  public showMoreNews() {
    this.visibleVideosCount += this.videosPerPage;
  }
}
