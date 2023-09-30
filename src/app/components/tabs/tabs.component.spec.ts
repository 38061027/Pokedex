import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { TabsComponent } from './tabs.component';
import { PokemonService } from 'src/app/services/pokemon.service';
import { of } from 'rxjs';


describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;




  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();




    fixture = TestBed.createComponent(TabsComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Deve ativar corretamente', () => {

    expect(component.activeTab).toBe(1);
    component.showTab(2);
    expect(component.activeTab).toBe(2);
    component.showTab(3);
    expect(component.activeTab).toBe(3);

  });

  it('Deve chamar getSpecies quando pokemonsTab faz mudanças', () => {

    const mockPokemonsTab = {
      species: {
        url: 'https://pokeapi.co/api/v2/pokemon-species/1/'
      }
    };


    spyOn(component, 'getSpecies');


    component.ngOnChanges({
      pokemonsTab: {
        currentValue: mockPokemonsTab,
        previousValue: null,
        firstChange: true,
        isFirstChange: () => true
      }
    });


    expect(component.getSpecies).toHaveBeenCalled();
  });


});
