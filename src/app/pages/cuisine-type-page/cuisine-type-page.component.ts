import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-cuisine-type-page',
  templateUrl: './cuisine-type-page.component.html',
  styleUrls: ['./cuisine-type-page.component.scss'],
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

  recipesByCuisines: { [key: string]: Observable<any> } = {};

  constructor(private serviceRecipe: RecipesService) {}

  ngOnInit(): void {
    this.getCuisineTypeRecipes();
  }

  getCuisineTypeRecipes() {
    this.recipesByCuisines = this.serviceRecipe.getCuisneTypeRecipes();
  }
}
