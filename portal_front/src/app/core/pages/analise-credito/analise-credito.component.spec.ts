import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseCreditoComponent } from './analise-credito.component';

describe('AnaliseCreditoComponent', () => {
  let component: AnaliseCreditoComponent;
  let fixture: ComponentFixture<AnaliseCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliseCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliseCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
