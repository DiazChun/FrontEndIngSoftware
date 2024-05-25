import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorieseguridadComponent } from './monitorieseguridad.component';

describe('MonitorieseguridadComponent', () => {
  let component: MonitorieseguridadComponent;
  let fixture: ComponentFixture<MonitorieseguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitorieseguridadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitorieseguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
