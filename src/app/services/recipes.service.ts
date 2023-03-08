import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  url: string = 'https://api.edamam.com/api/recipes/v2';
  type: string = 'public';
  app_id: string = '3b3fabbb';
  app_key: string = '8321f6ec66c716b7eb7b6055c799d4ec';
  mealType: string = 'Breakfast';
//   mealType = [
//     'Breakfast',
//     'Lunch',
//     'Snack',
//     'Teatime',
//     'Dinner'
// ];

  constructor(private http: HttpClient) {}

  getMealTypeRecipes(): Observable<any> {
    return this.http.get<any>(this.url + "?type=" + this.type + "&app_id=" + this.app_id + "&app_key=" + this.app_key + "&mealType=" + this.mealType)
    .pipe(
      map((data => data.hits))
    )
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
