import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialmiembroComponent } from './historialmiembro.component';

describe('HistorialmiembroComponent', () => {
  let component: HistorialmiembroComponent;
  let fixture: ComponentFixture<HistorialmiembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialmiembroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialmiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
