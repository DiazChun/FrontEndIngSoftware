import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistromiembroComponent } from './registromiembro.component';

describe('RegistromiembroComponent', () => {
  let component: RegistromiembroComponent;
  let fixture: ComponentFixture<RegistromiembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistromiembroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistromiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
