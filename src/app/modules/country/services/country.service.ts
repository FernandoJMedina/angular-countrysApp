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

  searchByCapital(searchTerm: string): Observable<Country[]> {
    const url = `${this._baseUrl}/capital/${searchTerm}`;
    return this._http.get<Country[]>(url);
  }

  searchByRegion(searchTerm: string) {
    const url = `${this._baseUrl}/region/${searchTerm}`;
    return this._http.get<Country[]>(url);
  }

  searchById(id: string): Observable<Country> {
    const url = `${this._baseUrl}/alpha/${id}`;
    return this._http.get<Country>(url);
  }
}
