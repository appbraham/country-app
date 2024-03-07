import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }


  searchCapital( term: string ): Observable<Country[]> {

    const url: string = `${ this.apiUrl }/capital/${ term }`;

    return this.http.get<Country[]>(url)
      .pipe(
        //Retorna un observable vacío
        catchError( () => of([]))
        // catchError( error => of([]))
      );
  }

  searchCountry( countryName: string ): Observable<Country[]>{
    const url: string = `${ this.apiUrl }/name/${ countryName }`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]))
      );
  }

  searchRegion( regionName: string ): Observable<Country[]> {
    const url: string = `${ this.apiUrl }/region/${ regionName }`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]) )
      );
  }

}
