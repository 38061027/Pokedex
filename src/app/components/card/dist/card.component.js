"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardComponent = void 0;
var core_1 = require("@angular/core");
var CardComponent = /** @class */ (function () {
    function CardComponent(pokemonService) {
        this.pokemonService = pokemonService;
        this.pokemons = [];
        this.colors = [];
    }
    CardComponent.prototype.ngOnInit = function () {
        this.getPokemons();
    };
    CardComponent.prototype.getPokemons = function () {
        var _this = this;
        var pokemonNames = [
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
        pokemonNames.filter(function (name) {
            _this.pokemonService.getPokemon(name).subscribe({
                next: function (res) {
                    var pokemon = {
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
                        base_experience: res.base_experience
                    };
                    _this.pokemons.push(pokemon);
                    _this.speciesUrl = res.species.url;
                    _this.getColor();
                },
                error: function (err) { return console.log('Não consegui encontrar o Pokémon', err); }
            });
        });
    };
    CardComponent.prototype.getColor = function () {
        var _this = this;
        this.pokemonService.getSpeciesData(this.speciesUrl).subscribe(function (res) {
            if (res) {
                _this.colors.push(res.color.name);
            }
            else {
                console.error('Não foi possível obter a cor do Pokémon.');
            }
        });
    };
    __decorate([
        core_1.Output()
    ], CardComponent.prototype, "pokemons");
    CardComponent = __decorate([
        core_1.Component({
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.css']
        })
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
