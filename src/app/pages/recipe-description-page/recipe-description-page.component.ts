import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-description-page',
  templateUrl: './recipe-description-page.component.html',
  styleUrls: ['./recipe-description-page.component.scss'],
})
export class RecipeDescriptionPageComponent implements OnInit {
  recipe: any;
  nutrients: { name: string; key: string }[] = [
    { name: 'Calories', key: 'ENERC_KCAL' },
    { name: 'Calcium', key: 'CA' },
    { name: 'Carbohydrates', key: 'CHOCDF' },
    { name: 'Cholesterol', key: 'CHOLE' },
    { name: 'Fat', key: 'FAT' },
    { name: 'Fiber', key: 'FIBTG' },
    { name: 'Magnesium', key: 'MG' },
    { name: 'Phosphorus', key: 'P' },
    { name: 'Potassium', key: 'K' },
    { name: 'Protein', key: 'PROCNT' },
    { name: 'Riboflavin (B2)', key: 'RIBF' },
    { name: 'Thiamin (B1)', key: 'THIA' },
    { name: 'Vitamin B6', key: 'VITB6A' },
    { name: 'Vitamin B12', key: 'VITB12' },
    { name: 'Vitamin C', key: 'VITC' },
    { name: 'Vitamin D', key: 'VITD' },
    { name: 'Vitamin K', key: 'VITK1' },
    { name: 'Sugar', key: 'SUGAR' },
    { name: 'Zinc', key: 'ZN' },
  ];

  @ViewChild('content', { static: false }) content!: ElementRef;

  isExpanded = false;
  expandableDiv!: HTMLDivElement;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngAfterViewInit() {
    this.expandableDiv = document.querySelector(
      '.expandable'
    ) as HTMLDivElement;
    this.expandableDiv.addEventListener('click', () => {
      if (this.isExpanded) {
        this.expandableDiv.classList.remove('expanded');
      } else {
        this.expandableDiv.classList.add('expanded');
      }
      this.isExpanded = !this.isExpanded;
    });
  }

  ngOnInit() {
    const idRecipe = this.route.snapshot.paramMap.get('recipeId');
    this.recipesService.getRecipeDetails(idRecipe).subscribe((recipe) => {
      console.log(recipe);
      if (recipe) {
        this.recipe = recipe.recipe;
        this.recipe.nutrients = this.getNutrients(recipe.recipe.totalNutrients);
      } else {
        console.log('Recipe not found!');
      }
    });
  }

  getNutrients(nutrients: any): any {
    const result: { [key: string]: any } = {};
    Object.keys(nutrients).forEach((key) => {
      result[key] =
        nutrients[key].quantity.toFixed(0) + ' ' + nutrients[key].unit;
    });
    return result;
  }

  showInfoItem(value: any): boolean {
    return value !== null && value !== 0;
  }

  downloadPdf() {
    const doc = new jsPDF();
    const recipeTitle = this.recipe.label;
    const recipeIngredients = this.recipe.ingredientLines.join('\n');
    doc.setFont('helvetica', 'bold');
    doc.text(recipeTitle, 10, 10);
    doc.setFont('helvetica', 'normal');
    doc.text('Ingredients:', 10, 25);
    doc.text(recipeIngredients, 10, 35);
    doc.save(`${recipeTitle}.pdf`); //verificar as aspas
  }
}
