import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonData, Species } from '../models/pokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService{

baseUrl: string = ""
  private pokeData: PokemonData | any




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

  getSpeciesData(speciesUrl: string): Observable<any> {
    return this.http.get<any>(speciesUrl)
  }







}
