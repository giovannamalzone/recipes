import { Component, ViewChild } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';

interface Subtask {
  name: string;
  completed?: boolean;
  color?: 'warn';
}

interface Task {
  name: string;
  completed: false;
  color: 'warn';
  subtasks: Subtask[];
}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  tasks: Task[] = [
    {
      name: 'MEALS',

      completed: false,
      color: 'warn',
      subtasks: [
        { name: 'breakfast' },
        { name: 'lunch' },
        { name: 'snack' },
        { name: 'teatime' },
        { name: 'dinner' },
      ],
    },
    {
      name: 'DIETS',
      completed: false,
      color: 'warn',
      subtasks: [
        { name: 'low-carb' },
        { name: 'low-fat' },
        { name: 'balanced' },
        { name: 'low-sodium' },
        { name: 'high-Fiber' },
        { name: 'high-Protein' },
      ],
    },
    {
      name: 'CUISINES',
      completed: false,
      color: 'warn',
      subtasks: [
        { name: 'American' },
        { name: 'Asian' },
        { name: 'British' },
        { name: 'Central Europe' },
        { name: 'Chinese' },
        { name: 'Eastern Europe' },
        { name: 'French' },
        { name: 'Indian' },
        { name: 'Italian' },
        { name: 'Japanese' },
        { name: 'Mediterranean' },
        { name: 'Mexican' },
        { name: 'Middle Eastern' },
        { name: 'Nordic' },
        { name: 'South American' },
        { name: 'South East Asian' },
      ],
    },
  ];
  searchTerm: string = '';
  recipes: any[] = [];
  selectedTask: string = '';
  selectedSubtask: string = '';

  @ViewChild('searchInput') searchInput: any;
  @ViewChild('filterComponent') filterComponent: any;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.searchRecipes();
  }

  searchRecipes() {
    let url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=1d02db66&app_key=0336d7bd6b33de1a31f3830cf2d415c0`;

    // Adicione cada subtask selecionada à URL como parâmetros de pesquisa
    this.tasks.forEach((task) => {
      task.subtasks.forEach((subtask) => {
        if (subtask.completed) {
          url += `&${
            task.name === 'MEALS'
              ? 'mealType'
              : task.name === 'DIETS'
              ? 'diet'
              : task.name === 'CUISINES'
              ? 'cuisineType'
              : ''
          }=${subtask.name.toLowerCase()}`;
        }
      });
    });

    if (this.searchTerm !== '') {
      url += `&q=${this.searchTerm}`;
    }

    console.log(url);

    this.recipesService.getSearchRecipes(url).subscribe((data) => {
      if (data && data.length > 0) {
        this.recipes = data;
      } else {
        this.recipes = [];
      }
    });
  }

  allComplete: boolean[] = [false, false, false];

  updateAllComplete(taskIndex: number) {
    this.allComplete[taskIndex] =
      this.tasks[taskIndex].subtasks != null &&
      this.tasks[taskIndex].subtasks.every((t) => t.completed);
  }

  someComplete(taskIndex: number): boolean {
    if (this.tasks[taskIndex].subtasks == null) {
      return false;
    }
    return (
      this.tasks[taskIndex].subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete[taskIndex]
    );
  }

  setAll(completed: boolean, taskIndex: number) {
    this.allComplete[taskIndex] = completed;
    if (this.tasks[taskIndex].subtasks == null) {
      return;
    }
    this.tasks[taskIndex].subtasks.forEach((t) => (t.completed = completed));
  }

  showSubtasks: boolean[] = [false, false, false];

  toggleSubtasks(taskIndex: number) {
    this.showSubtasks[taskIndex] = !this.showSubtasks[taskIndex];
  }
}
