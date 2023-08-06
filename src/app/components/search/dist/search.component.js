"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchComponent = void 0;
var core_1 = require("@angular/core");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(pokemonService) {
        this.pokemonService = pokemonService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.getPokemon('charizard');
    };
    SearchComponent.prototype.getPokemon = function (searchName) {
        var _this = this;
        this.pokemonService.getPokemon(searchName).subscribe({
            next: function (res) {
                _this.pokemon = {
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
            },
            error: function (err) { return console.log('Não consigui achar nem com visão raio X', err); }
        });
    };
    SearchComponent.prototype.SpeciesColorEmitted = function (species) {
        this.color = species.color;
    };
    __decorate([
        core_1.Output()
    ], SearchComponent.prototype, "pokemon");
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.css']
        })
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
