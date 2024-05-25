import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionanalisisComponent } from './visualizacionanalisis.component';

describe('VisualizacionanalisisComponent', () => {
  let component: VisualizacionanalisisComponent;
  let fixture: ComponentFixture<VisualizacionanalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizacionanalisisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizacionanalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
