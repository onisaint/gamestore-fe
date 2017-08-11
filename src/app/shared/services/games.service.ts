import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {ApiEndPoint} from '../app.config';
import 'rxjs/add/operator/map';

@Injectable()
export class GamesService {
  _url = ApiEndPoint + '/api/public';

  constructor(
    private _http: Http,
  ) { }

  getGames() {
    return this._http
      .get(this._url + '/games')
      .map((res: Response) => res.json());
  }
}
