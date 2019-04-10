import { Component, OnInit, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { FileUploader, FileLikeObject, FileItem } from 'ng2-file-upload';
import { IField } from 'src/app/models/stepper';
import { FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { FieldChipSelectorComponent } from '../field-chip-selector/field-chip-selector.component';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-field-attachments',
  templateUrl: './field-attachments.component.html',
  styleUrls: ['./field-attachments.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldAttachmentsComponent),
      multi: true
    }
  ]
})
export class FieldAttachmentsComponent implements OnInit, ControlValueAccessor {
  private _attachments: File[] = [];
  @Input() public field: IField;
  @Input() public formValues: FormGroup;
  onChange: any;
  @Input()
  get attachments(): File[] {
    return this._attachments;
  }

  set attachments(v: File[]) {
    this._attachments = v;
    this.onChange(v);
    this.attachmentsChange.emit(v);
  }

  @Output() public attachmentsChange = new EventEmitter<File[]>();

  public fileUploader: FileUploader = new FileUploader({ url: URL });
  ngOnInit(): void {
  }

  // ControlValueAccessor functions
  writeValue(obj: any): void { }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  addFiles() {
    this.attachments = this.fileUploader.queue.map(v => v._file);
  }

  createBinary(f: File): any {
    const reader = new FileReader();
    reader.onload = (e) => {
      return e.target;
    };
    reader.readAsBinaryString(f);
  }


}


