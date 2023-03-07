import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  task: Task = {
    name: 'MEAL TYPES',
    completed: false,
    color: 'warn',
    subtasks: [
      { name: 'Breakfast', completed: false, color: 'warn'},
      { name: 'Lunch', completed: false, color: 'warn' },
      { name: 'Snack', completed: false, color: 'warn' },
      { name: 'Teatime', completed: false, color: 'warn' },
      { name: 'Dinner', completed: false, color: 'warn' },
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }

  // Add the following variable to your component class
showSubtasks: boolean = false;

// Add the following method to your component class
toggleSubtasks() {
  this.showSubtasks = !this.showSubtasks;
}

}
