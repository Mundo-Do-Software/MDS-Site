import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesSliderComponent } from './cases-slider.component';

describe('CasesSliderComponent', () => {
  let component: CasesSliderComponent;
  let fixture: ComponentFixture<CasesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasesSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
