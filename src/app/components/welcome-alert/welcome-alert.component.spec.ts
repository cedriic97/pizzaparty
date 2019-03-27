import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAlertComponent } from './welcome-alert.component';

describe('WelcomeAlertComponent', () => {
  let component: WelcomeAlertComponent;
  let fixture: ComponentFixture<WelcomeAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
