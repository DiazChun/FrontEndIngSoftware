import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroderechoshumanosComponent } from './registroderechoshumanos.component';

describe('RegistroderechoshumanosComponent', () => {
  let component: RegistroderechoshumanosComponent;
  let fixture: ComponentFixture<RegistroderechoshumanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroderechoshumanosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroderechoshumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
