import { Component } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchTerm!: string;
  recipes!: any[];

  constructor(private recipesService: RecipesService) {}

  searchRecipes() {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=3b3fabbb&app_key=8321f6ec66c716b7eb7b6055c799d4ec&q=${this.searchTerm}`;
    this.recipesService.getSearchRecipes(url).subscribe((data) => {
      if (data && data.length > 0) {
        this.recipes = data;
      } else {
        this.recipes = [];
      }
    });
  }

}
