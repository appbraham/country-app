import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesSevice: CountriesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesSevice.searchCountryByAlphaCode( id ))
      )
      .subscribe( country => {
        if( !country ) return this.router.navigateByUrl('');
        return this.country = country;
      });
  }

  // searchCountry(code: string) {
  //   this.countriesSrvice.searchCountryByAlphaCode( code )
  //     .subscribe(country => {
  //       console.log({ country });
  //     });
  // }

}
