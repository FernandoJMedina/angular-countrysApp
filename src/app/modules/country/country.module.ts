import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { InfoComponent } from './pages/info/info.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
    InfoComponent,
    CountryTableComponent,
    CountryInputComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
    InfoComponent,
  ],
})
export class CountryModule {}
