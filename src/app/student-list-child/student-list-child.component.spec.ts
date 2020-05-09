import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListChildComponent } from './student-list-child.component';

describe('StudentListChildComponent', () => {
  let component: StudentListChildComponent;
  let fixture: ComponentFixture<StudentListChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
