import {Routes} from "@angular/router";
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
  }
];
