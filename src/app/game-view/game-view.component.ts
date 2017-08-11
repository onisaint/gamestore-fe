import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.sass']
})
export class GameViewComponent implements OnInit {
  @Input() gameId: String;
  @Input() name: String;
  @Input() price: String;
  constructor() { }

  ngOnInit() {
  }
}
