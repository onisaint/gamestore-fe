import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../shared/services/games.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  cartLen = 0;

  constructor(
    private gameService: GamesService
  ) { }

  ngOnInit() {
    this.gameService.cartLen
      .subscribe(cartLen => this.cartLen = cartLen);
  }

}
