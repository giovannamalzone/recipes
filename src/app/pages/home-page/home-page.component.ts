import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  recipes: any;

  constructor(
    private recipesService: RecipesService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getHomeRecipes();
  }

  getHomeRecipes() {
    this.recipesService.getHomeRecipes().subscribe(
      (result) => {
        this.recipes = result.hits;
      },
      (err) => {
        console.log('Erro ao listar', err);
      }
    );
  }
}
