import { Component } from '@angular/core';

import { future150Config } from '../../config';
import { Site, CurrentSiteService } from '../../site';
//import { AuthenticationService } from '../authentication/authentication.service';

@Component({
    selector: 'f150-top-navigation',
    template: require('./top-navigation.component.html'),
    styles: [
        require('./top-navigation.component.scss').toString()
    ]
})
export class TopNavigationComponent {
    public sites: Site[] = future150Config.sites;
    public selectedSite: Site = <Site>{};
    public user: any;

    public constructor(
        private currentSiteService: CurrentSiteService
        //private authenticationService: IAuthenticationService
    ) {
        //this.user = this.authenticationService.getCurrentUser();
        this.currentSiteService.currentSite
            .subscribe((currentSite: Site) => {
                this.selectedSite = currentSite;
            });
    }

    public logout(): void {
        //this.authenticationService.logout();
        //this.$state.go('site.home');
    }
}
