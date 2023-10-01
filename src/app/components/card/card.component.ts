import { Species } from 'src/app/models/pokemonData';
import { PokemonData } from './../../models/pokemonData';
import { Component, OnInit, Output, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Output() pokemons: PokemonData[] =[];
  speciesUrl!: string

  colors: string[] =[]




  constructor(
    private  pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.getPokemons();



  }

  getPokemons(): void {
    const pokemonNames: string[] = [
      'pikachu',
      'machamp',
      'venusaur',
      'arbok',
      'blastoise',
      'golbat',
      'arceus',
      'lugia',
      'mewtwo',
      'palkia',
      'beedrill',
      'groudon',
    ];

    pokemonNames.filter((name) => {
      this.pokemonService.getPokemon(name).subscribe({
        next: (res) => {

        const pokemon: PokemonData = {
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
          this.pokemons.push(pokemon);
          this.speciesUrl = res.species.url;
          this.getColor();

        },
        error: (err) => console.log('Não consegui encontrar o Pokémon', err),
      });
    });



  }

  getColor(){
    this.pokemonService.getSpeciesData(this.speciesUrl).subscribe((res: any) => {
      if (res) {
        this.colors.push(res.color.name);
      } else {
        console.error('Não foi possível obter a cor do Pokémon.');
      }
    });
  }

}
