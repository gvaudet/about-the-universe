import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexShowPlanetsComponent } from './index-show-planets/index-show-planets.component';
import { IndexShowVehiclesComponent } from './index-show-vehicles/index-show-vehicles.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NextMissionComponent } from './next-mission/next-mission.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'planets', component: IndexShowPlanetsComponent },
  {path: 'vehicles', component: IndexShowVehiclesComponent},
  {path: 'next-mission', component: NextMissionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
