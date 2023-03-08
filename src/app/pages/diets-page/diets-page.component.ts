import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-diets-page',
  templateUrl: './diets-page.component.html',
  styleUrls: ['./diets-page.component.scss']
})

export class DietsPageComponent implements OnInit{
  dietTypes = ['low-carb', 'low-fat', 'balanced', 'low-sodium', 'high-fiber', 'high-protein'];
  recipesByDiets: {[key: string]: Observable<any>} = {};

  constructor(private serviceRecipe: RecipesService) { }

  ngOnInit(): void {
    this.getDietTypeRecipes();
  }

  getDietTypeRecipes() {
    this.recipesByDiets = this.serviceRecipe.getDietTypeRecipes();
  }


}
