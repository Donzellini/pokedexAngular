import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/_model/Pokemon';

@Component({
  selector: 'app-pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.scss']
})
export class PokedexCardComponent {
  @Input('pokemon')
  public pokemon!: Pokemon;
}
