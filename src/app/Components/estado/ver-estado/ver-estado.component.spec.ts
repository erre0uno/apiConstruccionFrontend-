import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEstadoComponent } from './ver-estado.component';

describe('VerEstadoComponent', () => {
  let component: VerEstadoComponent;
  let fixture: ComponentFixture<VerEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
