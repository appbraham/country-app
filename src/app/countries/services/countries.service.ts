import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { typeZone } from './zone.enum';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {

    const url: string = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );

  }


  searchCapital(term: string): Observable<Country[]> {

    const url: string = `${this.apiUrl}/capital/${term}`;

    return this.http.get<Country[]>(url)
      .pipe(
        //Retorna un observable vacío
        catchError(() => of([]))
        // catchError( error => of([]))
      );
  }

  searchCountry(countryName: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${countryName}`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  searchRegion(regionName: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/region/${regionName}`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  searchBy(term: string, typeZone: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/${typeZone}/${term}`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

}
