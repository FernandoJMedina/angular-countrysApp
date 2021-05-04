import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  public searchTerm: string = '';
  public searchError: boolean = false;
  public countries: Country[] = [];

  constructor(private _countryService: CountryService) {}

  search(query: string) {
    this.searchError = false;
    this.searchTerm = query;
    this._countryService.searchByCapital(query).subscribe(
      (response) => {
        this.countries = response;
      },
      (error) => {
        this.searchError = true;
        this.countries = [];
      }
    );
  }
}
