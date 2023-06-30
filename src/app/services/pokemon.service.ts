import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService{

  private baseUrl: string = ""
  private pokeData: PokemonData | any

  private PokeAll: PokemonData | any


  constructor(private http: HttpClient) {
    this.baseUrl = environment.pokeApi
   }


  getPokemon(pokemonName: string): Observable<PokemonData>{
    this.pokeData = this
    .http
    .get<PokemonData>
    (`${this.baseUrl}${pokemonName}`)

    return this.pokeData
  }


  getAllPokemon(): Observable<any> {
   return this.http.get<any>(this.baseUrl).pipe(
    map(res => res.results)
   )


    }



}
