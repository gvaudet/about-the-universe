import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  character: any =[]; 
  vehicles: any = [];
  planets: any = []; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPeople()
    this.getVehicles()
    this.getPlanets()
    
  }

    getPeople() {
      
      this.http.get('https://swapi.dev/api/people').subscribe(data => { 
        this.character = data;
      });
    }
    getVehicles() {
      this.http.get('https://swapi.dev/api/vehicles').subscribe(data => {
        this.vehicles = data; 
      }); 
    }

  getPlanets() {
    this.http.get('https://swapi.dev/api/planets').subscribe(data => {
      this.planets = data; 
    })
  }
}
