import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../interfaces/pokemons';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({providedIn: 'root'})
export class PokemonService {
    constructor(private http: HttpClient) { }
    
    private allPokemonApi: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000';
    private pokemonApi: string = 'https://pokeapi.co/api/v2/pokemon';

    /**
     * Get all pokemons and their info
     * 
     * @returns pokemonList
     */
    getAllPokemon(): Pokemon[] {
        console.log("Obteniendo listado de pokemons")
        let pokemonList: Pokemon[] = [];
        this.http.get<Result>(this.allPokemonApi)
            .subscribe( result => {
                result.results.forEach(pokemon => {
                    this.getPokemonInfoByName(pokemon.name)
                        .subscribe( p => pokemonList.push(p))
                });
            })

        return pokemonList;
    }

    /**
     * Returns pokemon info by name
     * 
     * @param name 
     * @returns pokemon info
     */
    getPokemonInfoByName( name: string): Observable<Pokemon> {
        console.log(`Get ${name} info`);
        return this.http.get<Pokemon>(`${this.pokemonApi}/${name}`);
    }
}