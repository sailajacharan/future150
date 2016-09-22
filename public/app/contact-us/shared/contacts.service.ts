import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContactsService {
  private getAllContactsUrl: string = '/api/contacts';

  public constructor(
    private http: Http
  ) { }

  public getAll(q?, page?, pageSize?): Observable<any> {
    return this.http
      .get(this.getAllContactsUrl)
      .map((r: Response) => r.json());
  }
}
