import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ApiEndPoint} from '../app.config';
import 'rxjs/add/operator/map';
import {IGame} from "../interface/i.game";
import {HeaderService} from "./header.service";

@Injectable()
export class GamesService implements OnInit {
  _url = ApiEndPoint + '/api/public';
  inCart: IGame[] = [];
  cartLen = new EventEmitter<number>();

  constructor(
    private _http: Http,
    private headerService: HeaderService
  ) { }

  ngOnInit () {
    this.cartLen.emit(0);
  }

  getGames() {
    return this._http
      .get(this._url + '/games', {headers: this.headerService.getJWTHeaders()})
      .map((res: Response) => res.json());
  }

  addToCart(game: IGame) {
    this.inCart.push(game);
    this.cartLen.emit(this.inCart.length);
  }
}
