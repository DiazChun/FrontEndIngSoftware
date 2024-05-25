import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodeingresofinancieraComponent } from './registrodeingresofinanciera.component';

describe('RegistrodeingresofinancieraComponent', () => {
  let component: RegistrodeingresofinancieraComponent;
  let fixture: ComponentFixture<RegistrodeingresofinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrodeingresofinancieraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrodeingresofinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
