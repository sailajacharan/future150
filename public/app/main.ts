import 'zone.js/dist/zone';
import 'reflect-metadata';

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/router';
import '@angular/http';

// RxJS
import 'rxjs';

// Styles
import 'font-awesome/scss/font-awesome.scss';
import 'bootstrap/scss/bootstrap.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './shared';

platformBrowserDynamic().bootstrapModule(AppModule);
