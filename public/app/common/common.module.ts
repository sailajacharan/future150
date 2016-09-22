import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ErrSrcDirective } from './err-src.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ErrSrcDirective
  ],
  exports: [
    ErrSrcDirective
  ]
})
export class CommonModule {}
