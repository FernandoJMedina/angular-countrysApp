import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { InfoComponent } from './pages/info/info.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
    InfoComponent,
  ],
  imports: [CommonModule],
  exports: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
    InfoComponent,
  ],
})
export class CountryModule {}
