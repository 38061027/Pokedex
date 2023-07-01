import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  pokemon: PokemonData | any ;

  constructor (private pokemonService: PokemonService){
    this.pokemon = { id: 0,name: '',
    sprites: {
      front_default: ''},
    types: []
  };
  }


ngOnInit(): void {


    this.getPokemon('charizard')

  }

      getPokemon(searchName: string){
        this.pokemonService.getPokemon(searchName).subscribe({
          next: (res) => {
            this.pokemon = {
              id: res.id,
              name: res.name,
              sprites: res.sprites,
              types: res.types,
            };


          },
          error: (err) => console.log('Não consigui achar nem com visão raio X', err),
        });


      }


      



}
