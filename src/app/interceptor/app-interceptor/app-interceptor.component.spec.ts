import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInterceptorComponent } from './app-interceptor.component';

describe('AppInterceptorComponent', () => {
  let component: AppInterceptorComponent;
  let fixture: ComponentFixture<AppInterceptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInterceptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
