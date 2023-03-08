import { Component } from '@angular/core';

@Component({
  selector: 'app-cuisine-type-page',
  templateUrl: './cuisine-type-page.component.html',
  styleUrls: ['./cuisine-type-page.component.scss']
})
export class CuisineTypePageComponent {
  cuisineTypes = [
    'American',
    'Brasilian',
    'Italian',
  ]


}