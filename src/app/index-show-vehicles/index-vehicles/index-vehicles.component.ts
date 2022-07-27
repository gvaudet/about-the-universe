import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-index-vehicles',
  templateUrl: './index-vehicles.component.html',
  styleUrls: ['./index-vehicles.component.scss']
})



export class IndexVehiclesComponent implements OnInit {
// Déclaration de mes variables 
  vehiclesCount: any; 
  numberOfPages: any; 
  vehicles: any; 
  vehiclesObject: any; 

  constructor(private http: HttpClient) { }

  async ngOnInit(): Promise <void> {
    // getVehiclesCount();
    // getNumberOfPages();
    // getVehicules();
    await this.getVehiclesObject();
    await this.getVehiclesCount(); 
    this.getNumberOfPages()
  }



  // Pour le faire propre faire 3 methods + une pour le filtre 

  //Une pour récupuerer le compte de véhicles 
  async getVehiclesCount(): Promise<void>{
    return new Promise((resolve) => {
      this.http.get('https://swapi.dev/api/vehicles').subscribe((data: any) => {
      this.vehiclesCount = data.count;
      console.log(this.vehiclesCount);
      resolve();
      })
    })
    
  }

  // Recuperation de l'objet vehicles pour test 
  async getVehiclesObject(): Promise<void>{
    return new Promise((resolve) => {
      this.http.get('https://swapi.dev/api/vehicles').subscribe((data: any) => {
      this.vehiclesObject = data;
      console.log(this.vehiclesObject);
      resolve();
      })
    })
    
  }
  // Une pour récuperer le nombre de pages 
    getNumberOfPages() {
    this.numberOfPages = Math.ceil(this.vehiclesCount / this.vehicles.results.length)
    console.log(this.numberOfPages);
    
    }
  // }
  // Une pour récuperer les vehicles 
  // Faire la fonction de récupération de données "card véhicules"



}
