import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

let appComponent: AppComponent;

describe('AppComponent', () => {
    beforeEach(() => {
        appComponent = new AppComponent();
    });

    it('should be defined', () => {
        expect(appComponent).toBeDefined();
    });
});
