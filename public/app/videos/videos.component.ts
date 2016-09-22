import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { VideosService } from './shared/videos.service';

@Component({
    templateUrl: '/app/videos/videos.component.html'
})
export class VideosComponent {
    public page: number = 1;
    public pageSize: number = 10;
    public videos: any[] = [];
    public count: number;

    public constructor(
        private titleService: Title,
        private videosService: VideosService
    ) {
        titleService.setTitle('Videos | Future150');
        this.activate();
    }

    private activate() {
        this.videosService.getAll(null, this.page, this.pageSize)
            .subscribe(result => {
                this.videos = result.videos;
            });
    }
}
