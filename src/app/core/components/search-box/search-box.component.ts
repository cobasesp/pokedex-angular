import { Component, EventEmitter, HostListener, Output } from '@angular/core';

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

  onBlur(): void{
    document.querySelector('#searchPokemonInput')?.classList.add('blur');
  }

  onFocus(): void {
    document.querySelector('#searchPokemonInput')?.classList.remove('blur');
  }
  
  @HostListener("window:scroll", []) onWindowScroll() {
    const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;

    if(verticalOffset > 50) {
      document.querySelector('#searchPokemonInput')?.parentElement?.classList.add('fixed-top');
    } else if (verticalOffset < 50) {
      document.querySelector('#searchPokemonInput')?.parentElement?.classList.remove('fixed-top');
    }
  }

}
