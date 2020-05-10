import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousChild2Component } from './miscellaneous-child2.component';

describe('MiscellaneousChild2Component', () => {
  let component: MiscellaneousChild2Component;
  let fixture: ComponentFixture<MiscellaneousChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscellaneousChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
