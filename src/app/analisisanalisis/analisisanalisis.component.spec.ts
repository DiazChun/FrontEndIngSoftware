import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisanalisisComponent } from './analisisanalisis.component';

describe('AnalisisanalisisComponent', () => {
  let component: AnalisisanalisisComponent;
  let fixture: ComponentFixture<AnalisisanalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalisisanalisisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalisisanalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
