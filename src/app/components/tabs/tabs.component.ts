import { Component, Input } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  @Input() pokemonsTab: PokemonData | any

  constructor(){
    
  }


  activeTab = 1;

  showTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

}
