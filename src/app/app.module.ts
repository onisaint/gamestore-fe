import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { ShelfComponent } from './shelf/shelf.component';
import { GameViewComponent } from './game-view/game-view.component';
import {app_base_routes_config} from "./app.router";
import {GamesService} from "./shared/services/games.service";
import {HttpModule} from "@angular/http";
import {HeaderService} from "./shared/services/header.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShelfComponent,
    GameViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_base_routes_config
  ],
  providers: [HeaderService, GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
