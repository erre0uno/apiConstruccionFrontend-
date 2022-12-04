import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInspeccionComponent } from './ver-inspeccion.component';

describe('VerInspeccionComponent', () => {
  let component: VerInspeccionComponent;
  let fixture: ComponentFixture<VerInspeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerInspeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
