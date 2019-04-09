import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { IField } from 'src/app/models/stepper';
import { ImageCropperDialogComponent } from '../../dialogs/dialog-image-cropper/image-cropper-dialog.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-field-image',
  templateUrl: './field-image.component.html',
  styleUrls: ['./field-image.component.scss']
})
export class FieldImageComponent implements OnInit {
  croppedImage: any = '';
  imageExists = false;
  // TODO: Value Accessor

  @Input() public field: IField;
  @Input() public forminputs: FormGroup;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openCropper() {
    const dialogImage = this.dialog.open(ImageCropperDialogComponent, { disableClose: true, panelClass: 'my-panel', autoFocus: false });
    const sub = dialogImage.componentInstance.onAdd.subscribe((data) => {
      this.croppedImage = data;
      this.imageExists = true;
    });
    dialogImage.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }

  deleteImage() {
    this.imageExists = false;
    this.croppedImage = '';
  }

}
