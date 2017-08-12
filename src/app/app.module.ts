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
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShelfComponent,
    GameViewComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    app_base_routes_config
  ],
  providers: [HeaderService, GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
