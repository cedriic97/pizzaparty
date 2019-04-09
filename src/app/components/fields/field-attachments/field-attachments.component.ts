import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { IField } from 'src/app/models/stepper';
import { FormGroup } from '@angular/forms';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-field-attachments',
  templateUrl: './field-attachments.component.html',
  styleUrls: ['./field-attachments.component.scss']
})
export class FieldAttachmentsComponent implements OnInit {
  @Input() public field: IField;
  @Input() public formValues: FormGroup;

  public fileUploader: FileUploader = new FileUploader({url: URL});
  ngOnInit(): void {
  }

}
