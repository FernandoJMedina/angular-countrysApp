import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _baseUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private _http: HttpClient) {}

  searchByName(searchTerm: string): Observable<Country[]> {
    const url = `${this._baseUrl}/name/${searchTerm}`;
    return this._http.get<Country[]>(url);
  }

  searchByRegion() {}

  searchByCapital() {}
}
