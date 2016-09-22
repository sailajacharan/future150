import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'f150-app',
    template: `<router-outlet></router-outlet>`,
    styleUrls: [
        'app/app.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
