import {RouterModule, Routes} from '@angular/router';
import {ShelfComponent} from "./shelf/shelf.component";
import {CartComponent} from "./cart/cart.component";
import {ShippingComponent} from "./shipping/shipping.component";

const app_base_routes: Routes = [
  {
    path: '',
    component: ShelfComponent,
    pathMatch: 'full',
    data: {
      title: 'Games'
    }
  },
  {
    path: 'cart',
    component: CartComponent,
    pathMatch: 'full',
    data: {
      title: 'Cart'
    }
  },
  {
    path: 'shipping',
    component: ShippingComponent,
    pathMatch: 'full',
    data: {
      title: 'shipping'
    }
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

export const app_base_routes_config = RouterModule.forRoot(app_base_routes);
