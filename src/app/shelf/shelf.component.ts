import { Component, OnInit } from '@angular/core';
import {GamesService} from "../shared/services/games.service";
import {IGame} from "../shared/interface/i.game";
import {IRespose} from "../shared/interface/i.respose";

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.sass']
})
export class ShelfComponent implements OnInit {
  games: IGame[] = [];
  constructor(
    private gamesService: GamesService
  ) { }

  ngOnInit() {
    this.gamesService
      .getGames()
      .subscribe((res: IRespose) => {
          if ( res.ok ) {
            this.games = res.payload;
          }
      });
  }
}
