import { Component } from '@angular/core';

@Component({
  selector: 'app-cuisine-type-page',
  templateUrl: './cuisine-type-page.component.html',
  styleUrls: ['./cuisine-type-page.component.scss']
})
export class CuisineTypePageComponent {
  cuisineTypes = [
    'American',
    'Asian',
    'British',
    'Central Europe',
    'Chinese',
    'Eastern Europe',
    'French',
    'Indian',
    'Italian',
    'Japanese',
    'Mediterranean',
    'Mexican',
    'Middle Eastern',
    'Nordic',
    'South American',
    'South East Asian',
  ];

  cuisineRecipes: any;




  
}
