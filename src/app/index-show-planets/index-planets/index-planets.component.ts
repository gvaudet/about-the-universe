import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-planets',
  templateUrl: './index-planets.component.html',
  styleUrls: ['./index-planets.component.scss']
})
export class IndexPlanetsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  planets: any;
  totalPlanets: any =[];
  ngOnInit(): void {
    this.getPlanetsCard()
  }
  // Fonction pour récuperer les planètes
  getPlanetsCard() {

    //Première requete pour obtenir un premier flux de données 
    this.http.get('https://swapi.dev/api/planets').subscribe(data => {
      this.planets = data;      

      // Création de variable pour avoir le nombre de page sur lequel boucler 
      let numberOfPage = Math.floor(this.planets.count / this.planets.results.length); 

      // Création de la boucle 
      for (let i = 1; i <= numberOfPage; i++) {
        this.http.get('https://swapi.dev/api/planets/?page=' + i).subscribe(data => {
          this.totalPlanets = data;
          this.planets.results = this.planets.results.concat(this.totalPlanets.results); 
        })
        
        
      }
      
      // Pour les Planets : 
      // Diviser le count par le array.length en Math.floor
      // L'eregistrer sur une var et boucler sur ce résultat
    })
    }
}

