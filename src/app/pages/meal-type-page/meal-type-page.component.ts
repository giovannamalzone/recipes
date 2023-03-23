import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-meal-type-page',
  templateUrl: './meal-type-page.component.html',
  styleUrls: ['./meal-type-page.component.scss'],
})
export class MealTypePageComponent implements OnInit {
  mealTypes = ['Breakfast', 'Lunch', 'Snack', 'Teatime', 'Dinner'];
  recipesByTypes: { [key: string]: Observable<any> } = {};

  constructor(private serviceRecipe: RecipesService) {}

  ngOnInit(): void {
    this.getMealTypeRecipes();
  }

  getMealTypeRecipes() {
    this.recipesByTypes = this.serviceRecipe.getMealTypeRecipes();
  }
}
