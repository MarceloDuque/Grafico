/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LineasComponent } from './lineas.component';

describe('LineasComponent', () => {
  let component: LineasComponent;
  let fixture: ComponentFixture<LineasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
