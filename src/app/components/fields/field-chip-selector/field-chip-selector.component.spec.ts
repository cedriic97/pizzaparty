import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldChipSelectorComponent } from './field-chip-selector.component';

describe('FieldChipSelectorComponent', () => {
  let component: FieldChipSelectorComponent;
  let fixture: ComponentFixture<FieldChipSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldChipSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldChipSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
