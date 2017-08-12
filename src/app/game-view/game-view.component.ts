import {Component, Input, OnInit} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {GamesService} from "../shared/services/games.service";
import {IGame} from "../shared/interface/i.game";

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.sass']
})
export class GameViewComponent implements OnInit {
  @Input() game: IGame;
  inCartStatus = false;

  constructor(
    private gameService: GamesService
  ) { }

  ngOnInit() {
    this.inCartStatus = this.gameService.checkInCart(this.game);
  }

  handleCart() {
    if (!this.inCartStatus) {
      this.gameService
        .addToCart(this.game);
      this.inCartStatus = true;
    } else {
      this.gameService
        .removeFromCart(this.game);
      this.inCartStatus = false;
    }
  }
}
