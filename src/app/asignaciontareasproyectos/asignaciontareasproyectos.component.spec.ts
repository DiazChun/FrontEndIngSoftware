import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaciontareasproyectosComponent } from './asignaciontareasproyectos.component';

describe('AsignaciontareasproyectosComponent', () => {
  let component: AsignaciontareasproyectosComponent;
  let fixture: ComponentFixture<AsignaciontareasproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsignaciontareasproyectosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsignaciontareasproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
