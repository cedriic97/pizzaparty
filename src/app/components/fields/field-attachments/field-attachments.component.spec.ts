import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAttachmentsComponent } from './field-attachments.component';

describe('FieldAttachmentsComponent', () => {
  let component: FieldAttachmentsComponent;
  let fixture: ComponentFixture<FieldAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
