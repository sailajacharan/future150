import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class PlayersService {
  private getAllUrl: string = '/api/players';
  private getTrendingPlayersUrl: string = '/api/players/trending';
  private getPlayerBySlugUrl: string = '/api/players/';
  private getPlayerByIdUrl: string = '/api/players/';

  public constructor(
    private http: Http
  ) { }

  public getAll(q?, page?, pageSize?) {
    return this.http
      .get(this.getAllUrl)
      .map((r: Response) => r.json());
  }

  public getTrendingPlayers(site = 'hs', q?, page?, pageSize?) {
    return this.http
      .get(this.getTrendingPlayersUrl)
      .map((r: Response) => r.json());
  }

  public getBySlug(slug) {
    return this.http
      .get(this.getPlayerBySlugUrl + slug)
      .map((r: Response) => r.json());
  }

  public getById(id) {
    return this.http
      .get(this.getPlayerByIdUrl + id)
      .map((r: Response) => r.json());
  }
}
