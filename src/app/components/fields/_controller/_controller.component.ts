import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EFieldType, IField, ISection } from 'src/app/models/stepper';
import { getConfigFor, getFieldType } from 'src/app/models/process-config';

@Component({
  selector: 'app-controller',
  templateUrl: './_controller.component.html',
  styleUrls: ['./_controller.component.scss']
})
export class ControllerComponent implements OnInit {
  @Input() public chapter: ISection;
  @Input() public imgpath: string;
  @Input() public forminputs: FormGroup;
  fields: IField[];
  myform: FormGroup = null;

  ngOnInit() {
    this.getFields(this.chapter.fields);
    console.log(this.chapter.fields);
  }

  getFields(array: string[]) {
    this.fields = array.map(getConfigFor);
    console.log(this.fields)
  }

  fieldType(item: any): EFieldType {
    return getFieldType(item);
  }
}
