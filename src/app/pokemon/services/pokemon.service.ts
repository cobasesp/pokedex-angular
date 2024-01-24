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
                        .subscribe( p => {
                            p.colorTheme = this.injectPokemonColorTheme(p.types[0].type.name)
                            pokemonList.push(p)
                        })
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

    /**
     * Get the type of the pokemon and return a color theme
     * 
     * @param type 
     */
    injectPokemonColorTheme( type: string): string {
        if(type == 'grass') return '#cff6c8';
        if(type == 'fire') return '#ed5c53';
        if(type == 'poison') return '#d884f4';
        if(type == 'ghost') return '#b186f1';
        if(type == 'rock') return '#c5c6c8';
        if(type == 'ground') return '#ffda9e';
        if(type == 'water') return '#84b6f4';
        if(type == 'bug') return '#cbcd69';
        if(type == 'normal') return '#fffee1';
        if(type == 'flying') return '#dceafc';
        if(type == 'electric') return '#ffd700';

        // Return a default color
        return '#cfcecf' 
    }
}