import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoderechoshumanosComponent } from './seguimientoderechoshumanos.component';

describe('SeguimientoderechoshumanosComponent', () => {
  let component: SeguimientoderechoshumanosComponent;
  let fixture: ComponentFixture<SeguimientoderechoshumanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeguimientoderechoshumanosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeguimientoderechoshumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
