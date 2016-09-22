import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlayersService } from '../shared/players.service';

@Component({
    templateUrl: '/app/players/player-admin/player-admin.component.html'
})
export class PlayerAdminComponent implements OnInit, OnDestroy {
    private paramsSub: any;
    public player: any = {
        colleges: []
    };

    public constructor(
        private route: ActivatedRoute,
        private playersService: PlayersService
    ) { }

    ngOnInit() {
        this.paramsSub = this.route.params
            .subscribe((params: any) => {
                if (params.id) {
                    this.playersService.getById(params.id)
                        .subscribe(result => {
                            this.player = result;
                        });
                }
            });
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }
}
