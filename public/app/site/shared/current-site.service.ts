import { Injectable, EventEmitter } from '@angular/core';

import {
    Site,
    future150Config
} from '../../shared';

@Injectable()
export class CurrentSiteService {
    public currentSite: EventEmitter<Site> = new EventEmitter<Site>();

    public setSiteByPath(path: string): void {
        var site = future150Config.sites.filter((site: Site) => {
            return site.path == '/' + path;
        })[0];
        if (site) {
            this.currentSite.emit(site);
        }
    }
}
