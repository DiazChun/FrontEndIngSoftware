import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoproyectosComponent } from './seguimientoproyectos.component';

describe('SeguimientoproyectosComponent', () => {
  let component: SeguimientoproyectosComponent;
  let fixture: ComponentFixture<SeguimientoproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeguimientoproyectosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeguimientoproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
