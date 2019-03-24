import { Component, OnInit, Input } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { IField } from 'src/app/models/wizard';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  hideImageSelector: boolean;
  imageExists: boolean;

  @Input() public field: IField;
  @Input() public forminputs: FormGroup;

  constructor() { }

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
    // show message
  }

  hide() {
    this.hideImageSelector = !this.hideImageSelector;
    console.log('called')
  }
}