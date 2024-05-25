import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncalendarioscolaboracionComponent } from './gestioncalendarioscolaboracion.component';

describe('GestioncalendarioscolaboracionComponent', () => {
  let component: GestioncalendarioscolaboracionComponent;
  let fixture: ComponentFixture<GestioncalendarioscolaboracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestioncalendarioscolaboracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestioncalendarioscolaboracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
