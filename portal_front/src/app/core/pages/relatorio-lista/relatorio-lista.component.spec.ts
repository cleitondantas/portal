import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioListaComponent } from './relatorio-lista.component';

describe('RelatorioListaComponent', () => {
  let component: RelatorioListaComponent;
  let fixture: ComponentFixture<RelatorioListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
