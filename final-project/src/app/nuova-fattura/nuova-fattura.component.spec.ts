import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaFatturaComponent } from './nuova-fattura.component';

describe('NuovaFatturaComponent', () => {
  let component: NuovaFatturaComponent;
  let fixture: ComponentFixture<NuovaFatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovaFatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovaFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
