import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousChild1Component } from './miscellaneous-child1.component';

describe('MiscellaneousChild1Component', () => {
  let component: MiscellaneousChild1Component;
  let fixture: ComponentFixture<MiscellaneousChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscellaneousChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
