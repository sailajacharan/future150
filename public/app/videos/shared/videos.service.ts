import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class VideosService {
    private getAllVideosUrl: string = '/api/videos';

    public constructor(
        private http: Http
    ) { }

    public getAll(q?, page?, pageSize?): Observable<any> {
        return this.http
            .get(this.getAllVideosUrl)
            .map((r: Response) => r.json());
    }
}
