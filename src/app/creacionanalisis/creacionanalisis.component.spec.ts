import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionanalisisComponent } from './creacionanalisis.component';

describe('CreacionanalisisComponent', () => {
  let component: CreacionanalisisComponent;
  let fixture: ComponentFixture<CreacionanalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreacionanalisisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreacionanalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
