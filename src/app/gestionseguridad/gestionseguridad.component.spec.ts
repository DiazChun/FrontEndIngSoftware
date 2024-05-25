import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionseguridadComponent } from './gestionseguridad.component';

describe('GestionseguridadComponent', () => {
  let component: GestionseguridadComponent;
  let fixture: ComponentFixture<GestionseguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionseguridadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionseguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
