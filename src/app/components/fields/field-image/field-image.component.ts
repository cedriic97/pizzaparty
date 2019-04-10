import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { IField } from 'src/app/models/stepper';
import { AppState } from 'src/app/store';

import { ImageCropperDialogComponent } from '../../dialogs/dialog-image-cropper/image-cropper-dialog.component';


@Component({
  selector: 'app-field-image',
  templateUrl: './field-image.component.html',
  styleUrls: ['./field-image.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldImageComponent),
      multi: true
    }
  ]
})

export class FieldImageComponent implements OnInit, ControlValueAccessor {
  private _image: any = '';
  imageExists = false;
  onChange: (_: any) => { };

  @Input() public field: IField;
  @Input() public forminputs: FormGroup;

  get image(): any {
    return this._image;
  }

  set image(v: any) {
    this._image = v;
    this.onChange(v);
    this.imageChange.emit(v);
  }

  @Output() public imageChange = new EventEmitter<any>();
  constructor(public store: Store<AppState>, public dialog: MatDialog) { }

  // ControlValueAccessor functions
  writeValue(obj: any): void { }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  ngOnInit() {
  }

  openCropper() {
    const dialogImage = this.dialog.open(ImageCropperDialogComponent, {
      disableClose: true,
      panelClass: 'my-panel',
      autoFocus: false
    });
    const sub = dialogImage.componentInstance.onAdd.subscribe((data) => {
      this.image = data;
      this.imageExists = true;
    });
    dialogImage.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }

  // TODO: Würde das gerne null setzen aber dann kommt ein error beim Bild entfernen
  deleteImage() {
    this.imageExists = false;
    this.image = '';
  }

}
