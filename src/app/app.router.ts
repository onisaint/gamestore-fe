import {RouterModule, Routes} from '@angular/router';
import {ShelfComponent} from "./shelf/shelf.component";

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
    path: '**',
    redirectTo: '/'
  }
];

export const app_base_routes_config = RouterModule.forRoot(app_base_routes);
