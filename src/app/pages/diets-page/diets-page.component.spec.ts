import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DietsPageComponent } from './diets-page.component';

describe('DietsPageComponent', () => {
  let component: DietsPageComponent;
  let fixture: ComponentFixture<DietsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DietsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DietsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
