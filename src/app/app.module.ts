import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { MealTypePageComponent } from './pages/meal-type-page/meal-type-page.component';
import { DietsPageComponent } from './pages/diets-page/diets-page.component';
import { CuisineTypePageComponent } from './pages/cuisine-type-page/cuisine-type-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { RecipeDescriptionPageComponent } from './pages/recipe-description-page/recipe-description-page.component';
import { FoodRecipesPageComponent } from './pages/food-recipes-page/food-recipes-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { HttpClientModule } from '@angular/common/http';
import { RecipesService } from './services/recipes.service';
import { UppercaseDirective } from './directives/uppercase/uppercase.directive';

@NgModule({
  declarations: [
    AppComponent,
    MealTypePageComponent,
    DietsPageComponent,
    CuisineTypePageComponent,
    SearchPageComponent,
    RecipeDescriptionPageComponent,
    FoodRecipesPageComponent,
    HomePageComponent,
    ToolbarComponent,
    UppercaseDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    MatCardModule,
    MatIconModule,
    ScrollingModule,
    FormsModule,
    MatTreeModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
