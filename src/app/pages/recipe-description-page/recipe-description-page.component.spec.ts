import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDescriptionPageComponent } from './recipe-description-page.component';

describe('RecipeDescriptionPageComponent', () => {
  let component: RecipeDescriptionPageComponent;
  let fixture: ComponentFixture<RecipeDescriptionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDescriptionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDescriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
