import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficComponent } from './grafic.component';

describe('GraficComponent', () => {
  let component: GraficComponent;
  let fixture: ComponentFixture<GraficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
