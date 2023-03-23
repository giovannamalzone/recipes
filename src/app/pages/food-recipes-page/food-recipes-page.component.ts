import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-food-recipes-page',
  templateUrl: './food-recipes-page.component.html',
  styleUrls: ['./food-recipes-page.component.scss'],
})
export class FoodRecipesPageComponent implements OnInit {
  dishTypes = [
    'Biscuits and cookies',
    'Bread',
    'Cereals',
    'Main curse',
    'Preserve',
    'Preps',
    'Starter',
  ];
  recipesByDishes: { [key: string]: Observable<any> } = {};

  constructor(private serviceRecipe: RecipesService) {}

  ngOnInit(): void {
    this.getFoodRecipes();
  }

  getFoodRecipes() {
    this.recipesByDishes = this.serviceRecipe.getFoodRecipes();
  }
}
