import { Component, Input, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit{

  @Input() pokemonsTab: PokemonData | any

  poke: any[] = [];

  constructor(private pokeService: PokemonService){


  }


  getPoke(){
    this.pokeService.getSpeciesData().subscribe(
     res => this.poke = res.chain.evolves_to



    )
  }

ngOnInit(): void {
  this.getPoke()

}


  activeTab = 1;

  showTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

}
