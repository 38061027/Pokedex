import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonData, Species } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  color?: string



  @Output() pokemon: PokemonData | any ;

  constructor (private pokemonService: PokemonService){



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
              stats: res.stats,
              moves: res.moves,
              abilities: res.abilities,
              height: res.height,
              weight: res.weight,
              species: res.species,
              base_experience: res.base_experience,

            };





          },
          error: (err) => console.log('Não consigui achar nem com visão raio X', err),
        });


      }


      SpeciesColorEmitted(species: Species | any){
        this.color = species.color

      }




}
