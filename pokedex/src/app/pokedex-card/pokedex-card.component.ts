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

  public leadingZero(str: string | number, size:number = 3): string {
    
    let s = String(str);

    while(s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;

  }
}
