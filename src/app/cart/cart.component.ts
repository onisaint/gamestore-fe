import { Component, OnInit } from '@angular/core';
import {GamesService} from "../shared/services/games.service";
import {IGame} from "../shared/interface/i.game";
import {IRespose} from "../shared/interface/i.respose";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  cart;
  total = 0;
  bootstraped = false;
  constructor(
    private gameService: GamesService
  ) { }

  ngOnInit() {
    this.gameService
      .getCart()
      .subscribe((res: IRespose) => {
        if (res.ok) {
          this.cart = res.payload.data;
          this.total = res.payload.meta.display_price.with_tax.formatted;
          this.bootstraped = true;
        }
      });
  }
}
