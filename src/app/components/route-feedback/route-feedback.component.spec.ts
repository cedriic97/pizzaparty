import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFeedbackComponent } from './route-feedback.component';

describe('RouteFeedbackComponent', () => {
  let component: RouteFeedbackComponent;
  let fixture: ComponentFixture<RouteFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
