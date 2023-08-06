"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _this = this;
exports.__esModule = true;
exports.TabsComponent = void 0;
var core_1 = require("@angular/core");
var pokemonData_1 = require("src/app/models/pokemonData");
var pokemon_service_1 = require("src/app/services/pokemon.service");
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.color = 'warn';
        this.activeTab = 1;
        this.emitSpecies = new core_1.EventEmitter < pokemonData_1.Species | any >
            constructor(private, pokemonService, pokemon_service_1.PokemonService);
    }
    __decorate([
        core_1.Input()
    ], TabsComponent.prototype, "pokemonsTab");
    __decorate([
        core_1.Output()
    ], TabsComponent.prototype, "species");
    __decorate([
        core_1.Output()
    ], TabsComponent.prototype, "emitSpecies");
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'app-tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.css']
        })
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
{ }
ngOnChanges(changes, SimpleChanges);
void {
    "if": function (changes, _a, ) { }
} && changes['pokemonsTab'].currentValue;
{
    this.getSpecies();
}
getSpecies();
{
    this.pokemonService.getSpeciesData(this.pokemonsTab.species.url).subscribe(function (res) {
        if (res) {
            _this.species = {
                egg_groups: res.egg_groups,
                color: res.color
            };
            _this.emitSpecies.emit(_this.species);
        }
    });
}
showTab(tabNumber, number);
{
    this.activeTab = tabNumber;
}
