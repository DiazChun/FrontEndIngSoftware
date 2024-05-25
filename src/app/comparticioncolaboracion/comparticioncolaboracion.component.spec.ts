import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparticioncolaboracionComponent } from './comparticioncolaboracion.component';

describe('ComparticioncolaboracionComponent', () => {
  let component: ComparticioncolaboracionComponent;
  let fixture: ComponentFixture<ComparticioncolaboracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComparticioncolaboracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComparticioncolaboracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
