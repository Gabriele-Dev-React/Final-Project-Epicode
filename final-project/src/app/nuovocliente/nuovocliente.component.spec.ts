import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoclienteComponent } from './nuovocliente.component';

describe('NuovoclienteComponent', () => {
  let component: NuovoclienteComponent;
  let fixture: ComponentFixture<NuovoclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovoclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
