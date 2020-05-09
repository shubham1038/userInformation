import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMiscellaneousComponent } from './student-miscellaneous.component';

describe('StudentMiscellaneousComponent', () => {
  let component: StudentMiscellaneousComponent;
  let fixture: ComponentFixture<StudentMiscellaneousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMiscellaneousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMiscellaneousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
