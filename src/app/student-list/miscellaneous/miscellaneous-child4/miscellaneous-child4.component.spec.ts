import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousChild4Component } from './miscellaneous-child4.component';

describe('MiscellaneousChild4Component', () => {
  let component: MiscellaneousChild4Component;
  let fixture: ComponentFixture<MiscellaneousChild4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousChild4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscellaneousChild4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
