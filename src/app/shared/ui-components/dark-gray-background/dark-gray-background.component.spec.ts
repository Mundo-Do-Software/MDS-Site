import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkGrayBackgroundComponent } from './dark-gray-background.component';

describe('DarkGrayBackgroundComponent', () => {
  let component: DarkGrayBackgroundComponent;
  let fixture: ComponentFixture<DarkGrayBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkGrayBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkGrayBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
