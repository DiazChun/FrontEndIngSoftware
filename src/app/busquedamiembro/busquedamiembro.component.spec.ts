import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedamiembroComponent } from './busquedamiembro.component';

describe('BusquedamiembroComponent', () => {
  let component: BusquedamiembroComponent;
  let fixture: ComponentFixture<BusquedamiembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusquedamiembroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusquedamiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
