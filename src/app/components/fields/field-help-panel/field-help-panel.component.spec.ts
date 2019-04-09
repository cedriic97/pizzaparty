import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldHelpPanelComponent } from './field-help-panel.component';

describe('FieldHelpPanelComponent', () => {
  let component: FieldHelpPanelComponent;
  let fixture: ComponentFixture<FieldHelpPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldHelpPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldHelpPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
