import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrim2Component } from './meu-prim2.component';

describe('MeuPrim2Component', () => {
  let component: MeuPrim2Component;
  let fixture: ComponentFixture<MeuPrim2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPrim2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuPrim2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
