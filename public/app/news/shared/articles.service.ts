import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ArticlesService {
  private getAllArticlesUrl: string = '/api/articles';
  private getArticleBySlugUrl: string = '/api/articles/';

  public constructor(
    private http: Http
  ) { }

  public getAll(site: string = 'hs', q: string = '', page: number = 1, pageSize: number = 9): Observable<any> {
    let params = new URLSearchParams();
    params.set('site', site);
    params.set('q', q);
    params.set('page', page.toString());
    params.set('pageSize', pageSize.toString());
    return this.http
      .get(this.getAllArticlesUrl, { search: params })
      .map((r: Response) => r.json());
  }

  public getBySlug(slug: string): Observable<any> {
    return this.http
      .get(this.getArticleBySlugUrl + slug)
      .map((r: Response) => r.json());
  }

  public getFirst(sitePath: string): Observable<any> {
    return this.getAll(sitePath, null, 1, 1)
      .map((r: any) => r.articles[0]);
  }
}
