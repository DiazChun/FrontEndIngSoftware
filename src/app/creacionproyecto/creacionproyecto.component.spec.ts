import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionproyectoComponent } from './creacionproyecto.component';

describe('CreacionproyectoComponent', () => {
  let component: CreacionproyectoComponent;
  let fixture: ComponentFixture<CreacionproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreacionproyectoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreacionproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
