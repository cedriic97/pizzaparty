import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FieldImageComponent } from '../../fields/field-image/field-image.component';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropper-dialog',
  templateUrl: './image-cropper-dialog.component.html',
  styleUrls: ['./image-cropper-dialog.component.scss']
})
export class ImageCropperDialogComponent implements OnInit {
  imageChangedEvent: any;
  croppedImage: any = '';
  hideImageSelector: boolean;
  imageExists: boolean = false;
  onAdd = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<FieldImageComponent>,
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.imageExists = true;
    if (this.imageChangedEvent == null) {
      this.closeDialog();
    }
  }


  deleteImage() {
    this.croppedImage = '';
    this.imageChangedEvent = null;

  }
  ngOnInit() {
    const fileUpload: HTMLElement = document.getElementById('image') as HTMLElement;
    fileUpload.click();
  }

  saveImage() {
    this.onAdd.emit(this.croppedImage);
    this.closeDialog();
  }

}
