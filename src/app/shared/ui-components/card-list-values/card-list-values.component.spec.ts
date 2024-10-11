import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListValuesComponent } from './card-list-values.component';

describe('CardListValuesComponent', () => {
  let component: CardListValuesComponent;
  let fixture: ComponentFixture<CardListValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListValuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
