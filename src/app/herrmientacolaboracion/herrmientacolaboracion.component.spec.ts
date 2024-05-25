import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerrmientacolaboracionComponent } from './herrmientacolaboracion.component';

describe('HerrmientacolaboracionComponent', () => {
  let component: HerrmientacolaboracionComponent;
  let fixture: ComponentFixture<HerrmientacolaboracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HerrmientacolaboracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HerrmientacolaboracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
