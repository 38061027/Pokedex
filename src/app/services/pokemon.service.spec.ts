import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpTestingController: HttpTestingController
  let url: string
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PokemonService);
    httpTestingController = TestBed.inject(HttpTestingController)
    url = service.baseUrl
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('Deve realizar uma chamada GET para obter pokemons', ()=>{

    service.getPokemon('pokemonName').subscribe()

    const req = httpTestingController.expectOne(`${url}pokemonName`)
    req.flush({})
    expect(req.request.method).toBe('GET')
    expect(req.request.url).toBe(`${url}pokemonName`)

  })



  // it('Deve realizar uma chamada GET para obter species', ()=>{



  //   service.getSpeciesData('speciesUrl').subscribe()

  //   const req = httpTestingController.expectOne('speciesUrl')
  //   req.flush({})
  //   expect(req.request.method).toBe('GET')


  // })

  it('Deve realizar uma chamada GET para obter species',()=>{

    const response = [
      {
          "name": "monster",
          "url": "https://pokeapi.co/api/v2/egg-group/1/"
      },
      {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/egg-group/14/"
      }
  ]


  spyOn(service, 'getSpeciesData').and.returnValue(of(response))

  service.getSpeciesData('speciesUrl').subscribe(res =>{
    expect(res).toEqual(response)
  })



  })


});
