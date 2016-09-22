import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CurrentSiteService } from './shared/current-site.service';

@Component({
    templateUrl: '/app/site/site.component.html'
})
export class SiteComponent implements OnInit, OnDestroy {
    private paramsSub: Subscription;

    public constructor(
        private route: ActivatedRoute,
        private currentSiteService: CurrentSiteService
    ) { }

    ngOnInit() {
        this.paramsSub = this.route.params
            .subscribe((params: any) => {
                this.currentSiteService.setSiteByPath(params.site);
            });
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }
}
