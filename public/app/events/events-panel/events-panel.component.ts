import { Component, Input } from '@angular/core';

import { Site, CurrentSiteService } from '../../site';
import { future150Config } from '../../config';
import { EventsService } from '../shared/events.service';

@Component({
  selector: 'f150-events-panel',
  templateUrl: '/app/events/events-panel/events-panel.component.html'
})
export class EventsPanelComponent {
  @Input()
  public eventsPerPage: number = 3;
  @Input()
  public showViewAll: boolean = true;
  public selectedSite: Site;
  public events: any[] = [];
  public visibleEventsCount: number;
  public isEventsLoading: boolean = true;
  public defaultEventImageUrl: string = future150Config.defaultEventImageUrl;

  public constructor(
    private currentSiteService: CurrentSiteService,
    private eventsService: EventsService
  ) {
    //this.selectedSite = this.currentSiteService.getSite();
    this.visibleEventsCount = this.eventsPerPage;
    this.activate();
  }

  private activate(): void {
    this.eventsService.getAllTournaments()
      .subscribe(result => {
        this.events = result.tournaments;
        this.isEventsLoading = false;
      });
  }

  public showMoreEvents() {
    this.visibleEventsCount += this.eventsPerPage;
  }
}
