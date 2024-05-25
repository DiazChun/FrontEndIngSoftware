import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministraciondefuentesfinancieraComponent } from './administraciondefuentesfinanciera.component';

describe('AdministraciondefuentesfinancieraComponent', () => {
  let component: AdministraciondefuentesfinancieraComponent;
  let fixture: ComponentFixture<AdministraciondefuentesfinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministraciondefuentesfinancieraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministraciondefuentesfinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
