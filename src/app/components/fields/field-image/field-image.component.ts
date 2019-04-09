import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { IField } from 'src/app/models/stepper';
import { ImageCropperDialogComponent } from '../sub-components/sub-image-cropper-dialog/image-cropper-dialog.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  croppedImage: any = '';
  imageExists = false;
  // TODO: Value Accessor

  @Input() public field: IField;
  @Input() public forminputs: FormGroup;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openCropper() {
    const dialogSuccess = this.dialog.open(ImageCropperDialogComponent, { disableClose: true, panelClass: 'my-panel',autoFocus: false });
    const sub = dialogSuccess.componentInstance.onAdd.subscribe((data) => {
      this.croppedImage = data;
      console.log(data);
      this.imageExists = true;
    });
    dialogSuccess.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }

  deleteImage() {
    this.imageExists = false;
    this.croppedImage = '';
  }

}
