import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexShowPlanetsComponent } from './index-show-planets/index-show-planets.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'planets', component: IndexShowPlanetsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
