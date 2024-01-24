import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  constructor() { }

  @Input()
  public pokemon!: Pokemon;

}
