import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRecipesPageComponent } from './food-recipes-page.component';

describe('FoodRecipesPageComponent', () => {
  let component: FoodRecipesPageComponent;
  let fixture: ComponentFixture<FoodRecipesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodRecipesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodRecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
