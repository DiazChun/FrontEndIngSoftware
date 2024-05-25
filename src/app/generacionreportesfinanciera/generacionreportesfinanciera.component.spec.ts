import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionreportesfinancieraComponent } from './generacionreportesfinanciera.component';

describe('GeneracionreportesfinancieraComponent', () => {
  let component: GeneracionreportesfinancieraComponent;
  let fixture: ComponentFixture<GeneracionreportesfinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneracionreportesfinancieraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneracionreportesfinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
