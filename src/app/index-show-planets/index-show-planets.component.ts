import { Component, OnInit } from '@angular/core';
import { Planet } from '../interfaces/planet.interface';

@Component({
  selector: 'app-index-show-planets',
  templateUrl: './index-show-planets.component.html',
  styleUrls: ['./index-show-planets.component.scss']
})
export class IndexShowPlanetsComponent implements OnInit {
  planet!: Planet;
  
  receivePlanetsInfos($event :Planet){
    this.planet = $event;
    console.log(this.planet);
    
  }

  constructor() { }

  ngOnInit(): void {
  }


}
