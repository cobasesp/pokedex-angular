import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  public pokemonList!: Pokemon[];
  public filterBy: string = '';

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getAllPokemon();
  }

  filterPokemonsByName(name: string): void {
    console.log(`Filtering pokemons by: ${name}`);
    this.filterBy = name;
  }

}
