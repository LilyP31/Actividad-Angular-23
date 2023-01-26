import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asincrona23Component } from './asincrona23.component';

describe('Asincrona23Component', () => {
  let component: Asincrona23Component;
  let fixture: ComponentFixture<Asincrona23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asincrona23Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asincrona23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
