import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { typeZone } from '../../services/zone.enum';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService:CountriesService ){}

  searchByCapital( term: string): void {

    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries;
      });
  }

  searchBy( term: string){
    this.countriesService.searchBy( term, typeZone.capital)
      .subscribe( countries => {this.countries = countries; console.log('country page:', typeZone.country);
      });
  }

}
