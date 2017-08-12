import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../shared/services/games.service";
import {IRespose} from "../../shared/interface/i.respose";

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
    this.gameService
      .getCart()
      .subscribe((res: IRespose) => {
        if (res.ok) {
          this.cartLen = res.payload.data.length;
        }
      });
  }
}
