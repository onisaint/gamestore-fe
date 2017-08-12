import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ApiEndPoint} from '../app.config';
import 'rxjs/add/operator/map';
import {IGame} from "../interface/i.game";
import {HeaderService} from "./header.service";
import {IRespose} from "../interface/i.respose";

@Injectable()
export class GamesService implements OnInit {
  _url = ApiEndPoint + '/api/public';
  inCart: IGame[] = [];
  cartLen = new EventEmitter<number>();
  _jwtHeader = this.headerService.getJWTHeaders();

  constructor(
    private _http: Http,
    private headerService: HeaderService
  ) { }

  ngOnInit () {
    this.cartLen.emit(0);
  }

  getGames() {
    return this._http
      .get(this._url + '/games', {headers: this._jwtHeader})
      .map((res: Response) => res.json());
  }

  getCart() {
    return this._http
      .get(this._url + '/cart', {headers: this._jwtHeader})
      .map((res: Response) => res.json());
  }

  addToCart(game: IGame) {
    const payload = {
      _id: game.id
    };

    return this._http
      .post(this._url + '/cart', payload, {headers: this._jwtHeader})
      .map((res: Response) => res.json())
      .subscribe((res: IRespose) => {
        if (res.ok) {
          this.inCart = res.payload.data;
          this.cartLen.emit(this.inCart.length);
        }
      });
  }

  removeFromCart(game: IGame) {
    const payload = {
      _id: ""
    };

    return this._http
      .delete(this._url + '/cart', {headers: this._jwtHeader, body: payload})
      .map((res: Response) => res.json())
      .subscribe((res: IRespose) => {
        if (res.ok) {
          this.inCart = res.payload.data;
          this.cartLen.emit(this.inCart.length);
        }
      });
  }

  checkInCart(game: IGame) {
    let ret = false;
    this.inCart.forEach(item => {
      if (item.product_id === game.id) {
        ret = true;
      }
    });
    return ret;
  }

  updateCart(game: IGame[]) {
    this.inCart = game;
    this.cartLen.emit(this.inCart.length);
  }

  endSession( ) {
    this._http
      .get('/endsession', {headers:this._jwtHeader})
      .subscribe();
  }
}
