import { HttpClient } from '@angular/common/http';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
// Ligne pour l'export de la donnée, toujours le faire sur l'enfant. 
import { Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-index-planets',
  templateUrl: './index-planets.component.html',
  styleUrls: ['./index-planets.component.scss']
})




export class IndexPlanetsComponent implements OnInit {

  
  @Output() sendPlanet = new EventEmitter<any>();

  sendPlanetInfos(planet: any) {
    this.sendPlanet.emit(planet);
  }

  constructor(private http: HttpClient) { }
  // Déclaration des variables
  planets: any;
  countPlanets: any; 
  totalPlanets: any =[];
  variableDeMerdePourFonctionDeMerde: any =[];

  // Au lancement de la page le ngOnInit va se lancer
  async ngOnInit(): Promise<void> {
    await this.getCountPlanets()
    this.getPlanetsCard()
  }

  /**
   * ====================================
   * Pour la correction :
   * Le top serait de faire 3 fonctions pour les 3 phases =
   * -Récuperer le compte des planets getCountPlanets()
   * -Récuperer le nombre de pages getNumberPages
   * -Récuperer toutes les planets getPlanets
   */

  // Création de la fonction de récupération du planetCount 
  async getCountPlanets(): Promise<void> {

    return new Promise((resolve) => {
      this.http.get("https://swapi.dev/api/planets").subscribe((data: any) => {
        this.countPlanets = data.count;
        resolve(); 
      })
    })
  }

  // Fonction pour récuperer les planètes
  getPlanetsCard() {

    //Première requete pour obtenir un premier flux de données 
    this.http.get('https://swapi.dev/api/planets').subscribe(data => {
      this.planets = data;      

      // Création de variable pour avoir le nombre de page sur lequel boucler 
      let numberOfPage = Math.floor(this.planets.count / this.planets.results.length); 

      // Création de la boucle 
      for (let i = 2; i <= numberOfPage; i++) {
        this.http.get('https://swapi.dev/api/planets/?page=' + i).subscribe(data => {
          this.totalPlanets = data;
          this.planets.results = this.planets.results.concat(this.totalPlanets.results); 
          this.variableDeMerdePourFonctionDeMerde = this.planets.results.concat(this.totalPlanets.results); 
          
        }) 
      }
    })
    }

    filterByPopulation(event:any) {
      this.planets.results = this.variableDeMerdePourFonctionDeMerde
      if (this.planets) {
          if (event.target.value == 'UnderCent') {
            this.planets.results= this.planets.results.filter((planet:any) => (planet.population) <= 100000)
            this.countPlanets = this.planets.results.length;
            
          } 
          if (event.target.value == 'UnderCentM')
          {
            this.planets.results = this.planets.results.filter((planet:any) => (planet.population) <= 100000000)
            this.countPlanets = this.planets.results.length;
          }
          if (event.target.value == 'OverM')
          {
            this.planets.results = this.planets.results.filter((planet:any) => (planet.population) >= 100000000)
            this.countPlanets = this.planets.results.length;
          }
        } 
    }
}

// Pseudo-Code pour le filtre 
/** 
 * Objectif: à la selection de l'option du user dans le filtre
 * filtrer le tableau par population
 * Les planète comprises dans la tranche de population s'affichent 
 * faire une fonction qui récupère le choix user et qui fait une requete en fonction du choix
 */
