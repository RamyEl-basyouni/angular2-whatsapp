import {Routes} from "@angular/router";

import {CollectionComponent} from './collection';
import {ListComponent} from './list';


export const rootRouterConfig: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: 'full'
  },
  {
    path: "list",
    component: ListComponent
  },
  {
    path: "collection",
    component: CollectionComponent
  }
];
