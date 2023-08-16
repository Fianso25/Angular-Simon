import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  // Certaines personnes initialisent leurs propriétés ici dans le constructor et il est déconseillé de le faire.
  // constructor() {
  //   this.pokemonList = [] // ❌
  // }

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(event:MouseEvent) {
    const index: number = +(event.target as HTMLInputElement).value
    console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`);
  }
}

