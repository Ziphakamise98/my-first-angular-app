import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation';
import { Housing } from '../housing';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city"/>
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    @for (housingLocation of housingLocationList; track $index) {
      <app-housing-location [housingLocation]="housingLocation"/>
    }

  </section>`,
  styleUrl: './home.css',
})
export class Home {
  readonly baseUrl='https://angular.dev/assets/images/tutorials/common';
  housingLocationList : HousingLocationInfo[]=[];
  housing:Housing=inject(Housing);
  constructor(){
    this.housingLocationList=this.housing.getAllHousingLocations();
  }
}
