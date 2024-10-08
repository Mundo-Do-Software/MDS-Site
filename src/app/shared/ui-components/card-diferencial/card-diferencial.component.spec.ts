import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiferencialComponent } from './card-diferencial.component';

describe('CardDiferencialComponent', () => {
  let component: CardDiferencialComponent;
  let fixture: ComponentFixture<CardDiferencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDiferencialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDiferencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
