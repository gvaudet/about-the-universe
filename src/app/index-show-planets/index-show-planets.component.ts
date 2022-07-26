import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-show-planets',
  templateUrl: './index-show-planets.component.html',
  styleUrls: ['./index-show-planets.component.scss']
})
export class IndexShowPlanetsComponent implements OnInit {
  planet: any;
  
  receivePlanetsInfos($event :any){
    this.planet = $event;
    console.log(this.planet);
    
  }

  constructor() { }

  ngOnInit(): void {
  }


}
