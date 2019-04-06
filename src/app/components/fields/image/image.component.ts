import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { IField } from 'src/app/models/stepper';
import { ImageCropperDialogComponent } from '../image-cropper-dialog/image-cropper-dialog.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  imageChangedEvent: any;
  croppedImage: any = '';
  hideImageSelector: boolean;
  imageExists: boolean;

  @Input() public field: IField;
  @Input() public forminputs: FormGroup;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.hideImageSelector = false;
    this.imageExists = false;
  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.imageExists = true;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {

    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    console.log('error')
  }

  openCropper(){
    const dialogSuccess = this.dialog.open(ImageCropperDialogComponent, { disableClose: true, panelClass: 'my-panel' });
  }
  hide() {
    this.hideImageSelector = !this.hideImageSelector;
    console.log('called')
  }
}