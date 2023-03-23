import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuisineTypePageComponent } from './cuisine-type-page.component';

describe('CuisineTypePageComponent', () => {
  let component: CuisineTypePageComponent;
  let fixture: ComponentFixture<CuisineTypePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuisineTypePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CuisineTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
