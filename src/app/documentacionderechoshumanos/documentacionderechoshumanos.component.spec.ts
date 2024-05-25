import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacionderechoshumanosComponent } from './documentacionderechoshumanos.component';

describe('DocumentacionderechoshumanosComponent', () => {
  let component: DocumentacionderechoshumanosComponent;
  let fixture: ComponentFixture<DocumentacionderechoshumanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentacionderechoshumanosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentacionderechoshumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
