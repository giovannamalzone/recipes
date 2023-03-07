import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-meal-type-page',
  templateUrl: './meal-type-page.component.html',
  styleUrls: ['./meal-type-page.component.scss']
})
export class MealTypePageComponent {
  meals = this._formBuilder.group({
    breakfast: false,
    snack: false,
    lunch: false,
    teatime: false,
    dinner: false,
  });


  constructor(private _formBuilder: FormBuilder) {}



}
