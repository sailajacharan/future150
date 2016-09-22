import { Component } from '@angular/core';

import { PlayersService } from '../shared/players.service';

@Component({
    templateUrl: '/app/players/players-admin/players-admin.component.html'
})
export class PlayersAdminComponent {
    public players: any[] = [];

    public constructor(private playersService: PlayersService) {
        this.activate();
    }

    private activate(): void {
        this.playersService.getAll()
            .subscribe(result => {
                this.players = result.players;
            });
    }
}
