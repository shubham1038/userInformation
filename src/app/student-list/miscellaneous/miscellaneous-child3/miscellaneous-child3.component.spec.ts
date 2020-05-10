import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousChild3Component } from './miscellaneous-child3.component';

describe('MiscellaneousChild3Component', () => {
  let component: MiscellaneousChild3Component;
  let fixture: ComponentFixture<MiscellaneousChild3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousChild3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscellaneousChild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
