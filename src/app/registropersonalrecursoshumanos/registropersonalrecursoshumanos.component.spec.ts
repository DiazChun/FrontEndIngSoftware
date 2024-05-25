import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistropersonalrecursoshumanosComponent } from './registropersonalrecursoshumanos.component';

describe('RegistropersonalrecursoshumanosComponent', () => {
  let component: RegistropersonalrecursoshumanosComponent;
  let fixture: ComponentFixture<RegistropersonalrecursoshumanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistropersonalrecursoshumanosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistropersonalrecursoshumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
