import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatiComponent } from './dati.component';

describe('DatiComponent', () => {
  let component: DatiComponent;
  let fixture: ComponentFixture<DatiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatiComponent]
    });
    fixture = TestBed.createComponent(DatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
