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
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { FoodCarouselComponent } from './components/food-carousel/food-carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipesService } from './services/recipes.service';

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
    SearchComponent,
    FilterComponent,
    FoodCarouselComponent
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
    ReactiveFormsModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
