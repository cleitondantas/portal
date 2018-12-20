import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosFaturamentoComponent } from './dados-faturamento.component';

describe('DadosFaturamentoComponent', () => {
  let component: DadosFaturamentoComponent;
  let fixture: ComponentFixture<DadosFaturamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosFaturamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosFaturamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
