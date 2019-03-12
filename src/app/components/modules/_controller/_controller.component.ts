import { Component, OnInit, Input } from '@angular/core';
import { IField, EFieldType, getFieldType, getConfigFor } from 'src/app/models/process-config';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-controller',
  templateUrl: './_controller.component.html',
  styleUrls: ['./_controller.component.scss']
})
export class ControllerComponent implements OnInit {
  @Input() public field: string[];
  @Input() public forminputs: FormGroup;
  fields: IField[];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.getFields(this.field)
  }

  getFields(array: string[]) {
    this.fields = array.map(getConfigFor);
  }

  fieldType(item: any): EFieldType {
    return getFieldType(item);
  }
}
