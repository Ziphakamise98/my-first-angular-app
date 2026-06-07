import { Component,input,inject } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';
import {RouterLink,RouterOutlet} from '@angular/router'


@Component({
  selector: 'app-housing-location',
  imports: [RouterLink,RouterOutlet],
  template: `
  <section class="listing">
  <img class="listing-photo" [src]="housingLocation().photo" alt="Exterior Photo of {{housingLocation().name}}" crossorigin/>
  <h2 class="listing-heading">{{housingLocation().name}}</h2>
  <p class="listing-location">{{housingLocation().city}}, {{housingLocation().state}}</p>
  
  <a [routerLink]="['/details', housingLocation().id]">Learn More...</a>
  `,
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  housingLocation=input.required<HousingLocationInfo>();
}
