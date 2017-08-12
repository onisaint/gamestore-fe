import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamesService} from "./shared/services/games.service";
import {IRespose} from "./shared/interface/i.respose";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private gamesService: GamesService
  ) {}

  ngOnInit() {
    this.gamesService
      .getCart()
      .subscribe((res: IRespose) => {
        if (res.ok) {
          console.log(res.payload);
          this.gamesService.updateCart(res.payload.data);
        }
      });
  }

  ngOnDestroy() {
    this.gamesService.endSession();
  }
}
