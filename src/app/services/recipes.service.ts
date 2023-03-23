import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  url: string = 'https://api.edamam.com/api/recipes/v2';
  type: string = 'public';
  app_id: string = '1d02db66';
  app_key: string = '0336d7bd6b33de1a31f3830cf2d415c0';

  constructor(private http: HttpClient) {}

  getMealTypeRecipes(): { [key: string]: Observable<any> } {
    const mealTypes = ['Breakfast', 'Lunch', 'Snack', 'Teatime', 'Dinner'];
    const recipesByType: { [key: string]: Observable<any> } = {};

    for (const mealType of mealTypes) {
      const recipe$ = this.http
        .get<any>(
          this.url +
            '?type=' +
            this.type +
            '&app_id=' +
            this.app_id +
            '&app_key=' +
            this.app_key +
            '&mealType=' +
            mealType
        )
        .pipe(map((data) => data.hits));
      recipesByType[mealType] = recipe$;
    }

    return recipesByType;
  }

  getHomeRecipes(): Observable<any> {
    return this.http.get<any>(
      this.url +
        '?type=' +
        this.type +
        '&app_id=' +
        this.app_id +
        '&app_key=' +
        this.app_key +
        '&dishType=Preps'
    );
  }

  getFoodRecipes(): { [key: string]: Observable<any> } {
    const dishTypes = [
      'Biscuits and cookies',
      'Bread',
      'Cereals',
      'Main curse',
      'Preserve',
      'Preps',
      'Starter',
    ];
    const recipeResults: { [key: string]: Observable<any> } = {};

    for (const dishType of dishTypes) {
      recipeResults[dishType] = this.http
        .get<any>(
          this.url +
            '?type=' +
            this.type +
            '&app_id=' +
            this.app_id +
            '&app_key=' +
            this.app_key +
            '&dishType=' +
            dishType
        )
        .pipe(map((data) => data.hits));
    }
    return recipeResults;
  }

  getDietTypeRecipes(): { [key: string]: Observable<any> } {
    const dietTypes = [
      'low-carb',
      'low-fat',
      'balanced',
      'low-sodium',
      'high-fiber',
      'high-protein',
    ];
    const recipesByDiet: { [key: string]: Observable<any> } = {};

    for (const dietType of dietTypes) {
      const recipe$ = this.http
        .get<any>(
          this.url +
            '?type=' +
            this.type +
            '&app_id=' +
            this.app_id +
            '&app_key=' +
            this.app_key +
            '&diet=' +
            dietType
        )
        .pipe(map((data) => data.hits));
      recipesByDiet[dietType] = recipe$;
    }

    return recipesByDiet;
  }

  getCuisneTypeRecipes(): { [key: string]: Observable<any> } {
    const cuisineTypes = [
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
    const recipesByCuisine: { [key: string]: Observable<any> } = {};

    for (const cuisineType of cuisineTypes) {
      const recipe$ = this.http
        .get<any>(
          this.url +
            '?type=' +
            this.type +
            '&app_id=' +
            this.app_id +
            '&app_key=' +
            this.app_key +
            '&diet=' +
            cuisineType
        )
        .pipe(map((data) => data.hits));
      recipesByCuisine[cuisineType] = recipe$;
    }

    return recipesByCuisine;
  }

  getRecipeDetails(idRecipe: any): Observable<any> {
    return this.http.get<any>(
      this.url +
        '/' +
        idRecipe +
        '?type=' +
        this.type +
        '&app_id=' +
        this.app_id +
        '&app_key=' +
        this.app_key
    );
  }

  getSearchRecipes(url: string): Observable<any> {
    return this.http.get(url).pipe(
      map((response: any) => {
        if (
          response &&
          response.hits &&
          response.hits.length > 0 &&
          response.hits[0].recipe
        ) {
          return response.hits.map((hit: { recipe: any }) => hit.recipe);
        } else {
          return [];
        }
      })
    );
  }
}
