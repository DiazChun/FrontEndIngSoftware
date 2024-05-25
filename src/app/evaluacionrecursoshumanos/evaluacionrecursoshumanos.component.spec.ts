import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionrecursoshumanosComponent } from './evaluacionrecursoshumanos.component';

describe('EvaluacionrecursoshumanosComponent', () => {
  let component: EvaluacionrecursoshumanosComponent;
  let fixture: ComponentFixture<EvaluacionrecursoshumanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluacionrecursoshumanosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluacionrecursoshumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
