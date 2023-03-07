import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealTypePageComponent } from './meal-type-page.component';

describe('MealTypePageComponent', () => {
  let component: MealTypePageComponent;
  let fixture: ComponentFixture<MealTypePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealTypePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
