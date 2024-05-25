import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionrolesrecursoshumanosComponent } from './asignacionrolesrecursoshumanos.component';

describe('AsignacionrolesrecursoshumanosComponent', () => {
  let component: AsignacionrolesrecursoshumanosComponent;
  let fixture: ComponentFixture<AsignacionrolesrecursoshumanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsignacionrolesrecursoshumanosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsignacionrolesrecursoshumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
