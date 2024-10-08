import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgpdPageComponent } from './lgpd-page.component';

describe('LgpdPageComponent', () => {
  let component: LgpdPageComponent;
  let fixture: ComponentFixture<LgpdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgpdPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgpdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
