import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFormularComponent } from './feedback-formular.component';

describe('FeedbackFormularComponent', () => {
  let component: FeedbackFormularComponent;
  let fixture: ComponentFixture<FeedbackFormularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackFormularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
