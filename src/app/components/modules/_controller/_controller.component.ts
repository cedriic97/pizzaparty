import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EFieldType, IField, IProcess } from 'src/app/models/wizard';
import { getConfigFor, getFieldType } from 'src/app/models/process-config';

@Component({
  selector: 'app-controller',
  templateUrl: './_controller.component.html',
  styleUrls: ['./_controller.component.scss']
})
export class ControllerComponent implements OnInit {
  @Input() public chapter: IProcess;
  @Input() public imgpath: string;
  @Input() public forminputs: FormGroup;
  fields: IField[];


  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.getFields(this.chapter.fields);
    console.log(this.chapter.fields);
  }

  getFields(array: string[]) {
    this.fields = array.map(getConfigFor);
  }

  fieldType(item: any): EFieldType {
    return getFieldType(item);
  }
}
