import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexShowPlanetsComponent } from './index-show-planets/index-show-planets.component'
import {  HttpClientModule } from "@angular/common/http";
import { IndexPlanetsComponent } from './index-show-planets/index-planets/index-planets.component';
import { IndexShowVehiclesComponent } from './index-show-vehicles/index-show-vehicles.component';
import { IndexVehiclesComponent } from './index-show-vehicles/index-vehicles/index-vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    IndexShowPlanetsComponent,
    IndexPlanetsComponent,
    IndexShowVehiclesComponent,
    IndexVehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
