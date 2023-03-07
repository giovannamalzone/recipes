import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-description-page',
  templateUrl: './recipe-description-page.component.html',
  styleUrls: ['./recipe-description-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDescriptionPageComponent {

  recipeDetailResult: any;

  constructor(private recipesService: RecipesService,  private router: ActivatedRoute) { }

  ngOnInit() {
    this.getRecipe;
  }

  getRecipe(idRecipe: any){
    this.recipesService.getRecipeDetails(idRecipe).subscribe(
      (result) => {
        console.log(result, 'getdetails#');
        this.recipeDetailResult = result;
      },
      (err) => {
        console.log('Erro ao listar', err);
      }
    );
  }



}
