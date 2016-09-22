import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { future150Config } from '../config';
import { Player } from './shared/player.model';
import { PlayersService } from './shared/players.service';

interface IProfileGetBySlugRouteParams {
  slug: string;
}

@Component({
  templateUrl: '/app/players/profile.component.html'
})
export class ProfileComponent implements OnInit, OnDestroy {
  public defaultProfileBackgroundImageUrl: string = future150Config.defaultProfileBackgroundImageUrl;
  public player: Player = new Player();
  private paramsSub: any;

  public constructor(
    private route: ActivatedRoute,
    private playersService: PlayersService
  ) { }

  ngOnInit() {
    this.paramsSub = this.route.params
      .subscribe(params => {
        let profileGetBySlugRouteParams: IProfileGetBySlugRouteParams = <any>params;
        this.playersService.getBySlug(profileGetBySlugRouteParams.slug)
          .subscribe(result => {
            this.player = result;
            this.player.colleges.forEach(function (collegeInterest) {
              collegeInterest.isHot = (collegeInterest.levelOfInterest == 'Favorite' ||
                collegeInterest.levelOfInterest == 'Hot');
              collegeInterest.isWarm = (collegeInterest.levelOfInterest == 'Warmer' ||
                collegeInterest.levelOfInterest == 'Warm');
              collegeInterest.isCold = (collegeInterest.levelOfInterest == 'Cold');
            });
          });
      });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
