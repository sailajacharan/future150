import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { shopRouting } from './shop.routing';
import { ProductsService } from './products.service';
import { ShopComponent } from '../shop.component';
import { CommonModule } from '../../common';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    shopRouting
  ],
  declarations: [
    ShopComponent
  ],
  providers: [
    ProductsService
  ]
})
export class ShopModule {}
