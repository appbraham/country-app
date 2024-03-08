import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { typeZone } from '../../services/zone.enum';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  @Input()
  public countries:Country[] = [];

  constructor( private countriesService:CountriesService ){}

  searchByRegion( term: string){
    this.countriesService.searchRegion( term )
      .subscribe( countries => this.countries = countries );
  }

  searchBy( term: string){
    this.countriesService.searchBy( term, typeZone.region)
      .subscribe( countries => {this.countries = countries; console.log('country page:', typeZone.country);
      });
  }



}
