import { Component } from '@angular/core';

import { CampsService } from '../shared/camps.service';

@Component({
    templateUrl: '/app/camps/camps-admin/camps-admin.component.html'
})
export class CampsAdminComponent {
    public camps: any[] = [];

    public constructor(private campsService: CampsService) {
        this.activate();
    }

    private activate(): void {
        this.campsService.getAll()
            .subscribe(result => {
                this.camps = result.camps;
            });
    }
}
