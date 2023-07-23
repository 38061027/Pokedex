import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { PokemonData, Species } from 'src/app/models/pokemonData';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnChanges{

  color: ThemePalette = 'warn';
  @Input() pokemonsTab: PokemonData | any

  species: Species| any

  constructor(private pokemonService: PokemonService){}


 ngOnChanges(changes: SimpleChanges): void {
    this.getSpecies();
 }

 
 getSpecies() {
  this.pokemonService.getSpeciesData(this.pokemonsTab.species.url)
    .subscribe((res:Species) => {

      this.species = {
        egg_groups: res.egg_groups
      };
    });
}




  activeTab = 1;

  showTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

}
