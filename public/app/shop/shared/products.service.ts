import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  private getAllProductsUrl: string = '/api/products';

  public constructor(
    private http: Http
  ) { }

  public getAll(q?, page?, pageSize?): Observable<any> {
    return this.http
      .get(this.getAllProductsUrl)
      .map((r: Response) => r.json());
  }
}
