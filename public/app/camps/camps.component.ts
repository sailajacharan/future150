import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { future150Config } from '../config';
import { CampsService } from './shared/camps.service';

@Component({
  templateUrl: '/app/camps/camps.component.html',
  styleUrls: [
    'app/camps/camps.component.css'
  ]
})
export class CampsComponent {
  public page = 1;
  public pageSize = 9;
  public camps: any[];
  public defaultEventImageUrl: string = future150Config.defaultEventImageUrl;

  public constructor(
    private titleService: Title,
    private campsService: CampsService
  ) {
    titleService.setTitle('Camps | Future150');
    this.activate();
  }

  private activate(): void {
    this.campsService.getAll(null, this.page, this.pageSize)
      .subscribe(result => {
        this.camps = result.camps;
        this.camps.forEach((camp: any) => {
          camp.imageUrl = camp.imageUrl || this.defaultEventImageUrl;
        });
      });
  }
}
