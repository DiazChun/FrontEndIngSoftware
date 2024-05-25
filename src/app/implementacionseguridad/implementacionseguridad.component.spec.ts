import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementacionseguridadComponent } from './implementacionseguridad.component';

describe('ImplementacionseguridadComponent', () => {
  let component: ImplementacionseguridadComponent;
  let fixture: ComponentFixture<ImplementacionseguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImplementacionseguridadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImplementacionseguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
