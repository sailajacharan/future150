import { Component, Input } from '@angular/core';

@Component({
    selector: 'f150-event-jumbotron',
    templateUrl: '/app/events/event-jumbotron/event-jumbotron.component.html',
    styleUrls: [
        'app/events/event-jumbotron/event-jumbotron.component.css'
    ]
})
export class EventJumbotronComponent {
    @Input()
    public eventType: string;
    public events: any[];
}
