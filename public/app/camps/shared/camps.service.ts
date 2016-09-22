import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CampsService {
  private getAllCampsUrl: string = '/api/camps';

  public constructor(
    private http: Http
  ) { }

  public getAll(q: string = '', page: number = 1, pageSize: number = 9): Observable<any> {
    let params = new URLSearchParams();
    params.set('q', q);
    params.set('page', page.toString());
    params.set('pageSize', pageSize.toString());
    return this.http
      .get(this.getAllCampsUrl, { search: params })
      .map((r: Response) => r.json());
  }

  /*public getBySlug(slug) {
    return this.$http.get(this.config.baseApiUrl + '/camps/' + slug)
      .then((result) => {
        return result.data;
      });
  }*/
}
