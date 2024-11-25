// src/app/shared/template/template.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateComponent } from './template.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('TemplateComponent', () => {
  let component: TemplateComponent;
  let fixture: ComponentFixture<TemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateComponent], // Importa como componente standalone
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(new Map([['id', '123']])),
            queryParamMap: of(new Map([['search', 'query']]))
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
