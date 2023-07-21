import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit{

  color: ThemePalette = 'warn';


  @Input() pokemonsTab: PokemonData | any


ngOnInit(): void {
  

}


  activeTab = 1;

  showTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

}
