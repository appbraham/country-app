import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { typeZone } from '../../services/zone.enum';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries:Country[] = [];

  constructor( private countriesService:CountriesService ){}

  searchByCountry( term: string){
    this.countriesService.searchCountry(term)
    .subscribe( countries => this.countries = countries);
  }

  searchBy( term: string){
    this.countriesService.searchBy( term, typeZone.country)
      .subscribe( countries => {this.countries = countries; console.log('country page:', typeZone.country);
      });
  }

}
