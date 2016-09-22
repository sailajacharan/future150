import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { ProductsService } from './shared/products.service';
import { future150Config } from '../config';

@Component({
  templateUrl: '/app/shop/shop.component.html'
})
export class ShopComponent {
  public page = 1;
  public pageSize = 10;
  public products: any[];

  public constructor(
    private titleService: Title,
    private productsService: ProductsService
  ) {
    titleService.setTitle('Shop | Future150');
    this.activate();
  }

  private activate(): void {
    this.productsService.getAll(null, this.page, this.pageSize)
      .subscribe(result => {
        this.products = result.products;
      });
  }
}
