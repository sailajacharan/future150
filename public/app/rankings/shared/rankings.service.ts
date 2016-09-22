import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class RankingsService {
  private getAllRankingsUrl: string = '/api/rankings/';
  private getRankingsByIdUrl: string = '/api/rankings/';

  public constructor(
    private http: Http
  ) { }

  public getAll(type = 'national', site = 'hs'): Observable<any> {
    var params: URLSearchParams = new URLSearchParams();
    params.set('site', site);
    var options: RequestOptionsArgs = {
      search: params
    };
    return this.http
      .get(this.getAllRankingsUrl + type, options)
      .map((r: Response) => r.json());
  }

  public getById(id: any): Observable<any> {
    return this.http
      .get(this.getRankingsByIdUrl + id)
      .map((r: Response) => r.json());
  }
}
