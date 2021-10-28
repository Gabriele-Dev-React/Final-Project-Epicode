import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaFatturaComponent } from './modifica-fattura.component';

describe('ModificaFatturaComponent', () => {
  let component: ModificaFatturaComponent;
  let fixture: ComponentFixture<ModificaFatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaFatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
