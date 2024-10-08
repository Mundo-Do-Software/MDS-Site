import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicePageComponent } from './privacy-police-page.component';

describe('PrivacyPolicePageComponent', () => {
  let component: PrivacyPolicePageComponent;
  let fixture: ComponentFixture<PrivacyPolicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyPolicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
