import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";

import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";

import {ListComponent, ListItemComponent} from './list';


import {ContactService, UtilService, FooterComponent, 
  HeaderComponent, PhonePipe, BtnClickDirective} from "./shared";


@NgModule({
  declarations: [
    AppComponent,
    ListComponent, ListItemComponent,
    HeaderComponent, FooterComponent,
    PhonePipe,
    BtnClickDirective
  ],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [ContactService, UtilService],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
