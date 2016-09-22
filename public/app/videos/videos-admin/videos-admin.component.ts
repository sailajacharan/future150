import { Component } from '@angular/core';

import { VideosService } from '../shared/videos.service';

@Component({
    templateUrl: '/app/videos/videos-admin/videos-admin.component.html'
})
export class VideosAdminComponent {
    public videos: any[] = [];

    public constructor(private videosService: VideosService) {
        this.activate();
    }

    private activate(): void {
        this.videosService.getAll()
            .subscribe(result => {
                this.videos = result.videos;
            });
    }
}
