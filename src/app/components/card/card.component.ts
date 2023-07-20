import { Component, OnInit, Output } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
@Output() pokemons: PokemonData[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();

  }


  getPokemons(): void {
    const pokemonNames: string[] = ['pikachu', 'charizard', 'venusaur', 'bulbasaur' ,'squirtle','charmeleon','arceus','lugia', 'mewtwo', 'palkia', 'caterpie', 'groudon'];

    pokemonNames.forEach((name) => {
      this.pokemonService.getPokemon(name).subscribe({
        next: (res) => {

          const pokemon: PokemonData = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types,
            stats: res.stats,
            moves: res.moves
          };
          this.pokemons.push(pokemon);
        },
        error: (err) => console.log('Não consegui encontrar o Pokémon', err),
      });
    });
  }







}
