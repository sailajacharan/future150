import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class EventsService {
  private getAllCampsUrl: string = '/api/camps';
  private getAllTournamentsUrl: string = '/api/tournaments';

  public constructor(
    private http: Http
  ) { }

  public getAllCamps(q?, page?, pageSize?): Observable<any> {
    return this.http
      .get(this.getAllCampsUrl)
      .map((r: Response) => r.json());
  }

  public getAllTournaments(q?, page?, pageSize?): Observable<any> {
    return this.http
      .get(this.getAllTournamentsUrl)
      .map((r: Response) => r.json());
  }
}
