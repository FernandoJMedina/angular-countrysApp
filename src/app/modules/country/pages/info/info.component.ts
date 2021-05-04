import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [],
})
export class InfoComponent implements OnInit {
  public country!: Country;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _countryService: CountryService
  ) {}

  ngOnInit(): void {
    // good
    this._activatedRoute.params
      .pipe(
        switchMap((params) => this._countryService.searchById(params.id)),
        tap(console.log)
      )
      .subscribe((response) => {
        this.country = response;
      });

    //bad
    // this._activatedRoute.params.subscribe((params) => {
    //   console.log(params);
    //   this._countryService.searchById(params.id).subscribe(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // });
  }
}
