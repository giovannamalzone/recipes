import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  url: string = 'https://api.edamam.com/api/recipes/v2';
  type: string = 'public';
  app_id: string = '14dfd39b';
  app_key: string = 'd5ac8d96f13f78d6142a7bf0d69fe025';

  constructor(private http: HttpClient) {}

  getMealTypeRecipes(): {[key: string]: Observable<any>} {
    const mealTypes = ['Breakfast', 'Lunch', 'Snack', 'Teatime', 'Dinner'];
    const recipesByType: {[key: string]: Observable<any>} = {};

    for (const mealType of mealTypes) {

      const recipe$ = this.http.get<any>(this.url + "?type=" + this.type + "&app_id=" + this.app_id + "&app_key=" + this.app_key + "&mealType=" + mealType)
    .pipe(
      map((data => data.hits))
    )
      recipesByType[mealType] = recipe$;
    }

    return recipesByType;
  }

  getDietTypeRecipes(): {[key: string]: Observable<any>} {
    const dietTypes = ['low-carb', 'low-fat', 'balanced', 'low-sodium', 'high-fiber', 'high-protein'];
    const recipesByDiet: {[key: string]: Observable<any>} = {};

    for (const dietType of dietTypes) {
      const recipe$ = this.http.get<any>(this.url + "?type=" + this.type + "&app_id=" + this.app_id + "&app_key=" + this.app_key + "&diet=" + dietType)
        .pipe(
          map((data => data.hits))
        );
      recipesByDiet[dietType] = recipe$;
    }

    return recipesByDiet;
  }

  getRecipeDetails(idRecipe: any): Observable<any> {
    return this.http.get<any>(this.url + "/" + idRecipe + "?type=" + this.type + "&app_id=" + this.app_id + "&app_key=" + this.app_key)
    .pipe(
      map((data => data.hits))
    )
  }

  getSearchRecipes(url: string): Observable<any> {
    return this.http.get(url).pipe(
      map((response: any) => {
        if (response && response.hits && response.hits.length > 0 && response.hits[0].recipe) {
          return response.hits.map((hit: { recipe: any; }) => hit.recipe);
        } else {
          return [];
        }
      })
    );
  }

}
