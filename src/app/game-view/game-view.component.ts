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
  }

  addToCart() {
    this.gameService
      .addToCart(this.game);
    this.inCartStatus = true;
  }
}
