import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroeService: HeroesService,
               private router: Router) { }

  ngOnInit(): void {

    this.heroes = this.heroeService.getHeroes();
    console.log(this.heroes);

  }

  verHeroe(index: number){
    this.router.navigate(['/heroe', index]);
  }

}
