import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

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
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  tasks: Task[] = [
    {
      name: 'MEALS',
      completed: false,
      color: 'warn',
      subtasks: [
        { name: 'Breakfast' },
        { name: 'Lunch' },
        { name: 'Snack' },
        { name: 'Teatime' },
        { name: 'Dinner' },
      ],
    },
    {
      name: 'DIETS',
      completed: false,
      color: 'warn',
      subtasks: [
        { name: 'Low-carb' },
        { name: 'Low-fat' },
        { name: 'Balanced' },
        { name: 'Low-sodium' },
        { name: 'High Fiber' },
        { name: 'High Protein' },
      ],
    },
    {
      name: 'CUISINES',
      completed: false,
      color: 'warn',
      subtasks: [
        { name: 'American' },
        { name: 'Brazilian' },
        { name: 'Italian' },
        { name: 'Teatime' },
        { name: 'Dinner' },
      ],
    },
  ];

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
