import { Component, Input } from '@angular/core';

import {
    Site,
    Player
} from '../../shared';

@Component({
    selector: 'f150-player-detail',
    templateUrl: '/app/players/player-detail/player-detail.component.html'
})
export class PlayerDetailComponent {
    @Input()
    public player: Player;
    @Input()
    public rank: number;
    @Input()
    public defaultProfileImageUrl: string;
    @Input()
    public selectedSite: Site;
}
