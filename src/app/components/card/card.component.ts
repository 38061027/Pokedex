import { Component, OnInit, Output, Input } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
@Output() pokemons: PokemonData[] = [];



  species: any

  constructor(private pokemonService: PokemonService) {


  }

  ngOnInit(): void {
    this.getPokemons();



  }


  getPokemons(): void {
    const pokemonNames: string[] = ['pikachu', 'machamp', 'venusaur', 'arbok' ,'blastoise','golbat','arceus','lugia', 'mewtwo', 'palkia', 'beedrill', 'groudon'];

    pokemonNames.forEach((name) => {
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
        },
        error: (err) => console.log('Não consegui encontrar o Pokémon', err),
      });
    });
  }







}
