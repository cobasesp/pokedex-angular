import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-info-page',
  templateUrl: './pokemon-info-page.component.html',
  styleUrls: ['./pokemon-info-page.component.css']
})
export class PokemonInfoPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public name: string = '';

  ngOnInit(): void{
    this.route.params.subscribe( params => {
        this.name = params['name'];
    })
    console.log(`Pokemon ${this.name}`);
  }

}
