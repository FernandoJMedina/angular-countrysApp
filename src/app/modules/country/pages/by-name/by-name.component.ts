import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styles: [],
})
export class ByNameComponent {
  public searchTerm: string = '';
  public searchError: boolean = false;
  public countries: Country[] = [];

  constructor(private _countryService: CountryService) {}

  search(query: string) {
    this.searchError = false;
    this.searchTerm = query;
    this._countryService.searchByName(query).subscribe(
      (response) => {
        this.countries = response;
      },
      (error) => {
        this.searchError = true;
        this.countries = [];
      }
    );
  }

  suggestions(query: string) {
    this.searchError = false;
    // TODO:
    console.log(query);
  }
}
