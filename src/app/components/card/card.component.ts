import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemons: PokemonData[] = [];

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    const pokemonNames: string[] = ['pikachu', 'charizard', 'venusaur', 'bulbasaur' ,'squirtle','charmeleon'];

    pokemonNames.forEach((name) => {
      this.service.getPokemon(name).subscribe({
        next: (res) => {
          const pokemon: PokemonData = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types,
          };
          this.pokemons.push(pokemon);
        },
        error: (err) => console.log('Não consegui encontrar o Pokémon', err),
      });
    });
  }
}
