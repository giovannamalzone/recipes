import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CuisineTypePageComponent } from './pages/cuisine-type-page/cuisine-type-page.component';
import { DietsPageComponent } from './pages/diets-page/diets-page.component';
import { FoodRecipesPageComponent } from './pages/food-recipes-page/food-recipes-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MealTypePageComponent } from './pages/meal-type-page/meal-type-page.component';
import { RecipeDescriptionPageComponent } from './pages/recipe-description-page/recipe-description-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'meal-type',
    component: MealTypePageComponent,
  },
  {
    path: 'diet',
    component: DietsPageComponent,
  },
  {
    path: 'cuisine-type',
    component: CuisineTypePageComponent,
  },
  {
    path: 'search',
    component: SearchPageComponent,
  },
  {
    path: 'food-recipes',
    component: FoodRecipesPageComponent,
  },
  {
    path: 'recipe-description',
    component: RecipeDescriptionPageComponent,
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],

  exports: [
      RouterModule
  ],
})
export class AppRoutingModule { }
