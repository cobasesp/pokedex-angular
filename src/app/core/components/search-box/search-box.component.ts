import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  constructor() { }

  @Output()
  private pokemonNameValue = new EventEmitter<string>();

  getPokemonValue( name: string): void {
    console.log(`Busqueda: ${name}`);
    this.pokemonNameValue.emit(name);
  }

}
