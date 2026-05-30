import { Component,input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';


@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
  <section class="listing">
  <img class="listing-photo" [src]="housingLocation().photo" alt="Exterior Photo of {{housingLocation().name}}" crossorigin/>
  <h2 class="listing-heading">{{housingLocation().name}}</h2>
  <p class="listing-location">{{housingLocation().city}}, {{housingLocation().state}}</p>
  `,
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  housingLocation=input.required<HousingLocationInfo>();
}
