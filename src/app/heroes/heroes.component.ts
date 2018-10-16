import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) {
    
   }

  heroes : Hero[];

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
  console.log(HEROES);
  this.getHeroes();

  }


  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero.id);
  }

 

}
