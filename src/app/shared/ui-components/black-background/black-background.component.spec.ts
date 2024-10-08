import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBackgroundComponent } from './black-background.component';

describe('BlackBackgroundComponent', () => {
  let component: BlackBackgroundComponent;
  let fixture: ComponentFixture<BlackBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlackBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
