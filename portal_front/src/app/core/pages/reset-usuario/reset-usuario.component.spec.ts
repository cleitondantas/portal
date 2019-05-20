import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetUsuarioComponent } from './reset-usuario.component';

describe('ResetUsuarioComponent', () => {
  let component: ResetUsuarioComponent;
  let fixture: ComponentFixture<ResetUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
