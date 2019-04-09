import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { getConfigFor, getFieldType } from 'src/app/models/process-config';
import { EFieldType, IField, ISection } from 'src/app/models/stepper';

@Component({
  selector: 'app-controller',
  templateUrl: './_controller.component.html',
  styleUrls: ['./_controller.component.scss']
})

export class ControllerComponent implements OnInit {
  @Input() public section: ISection;
  @Input() public imagePath: string;
  @Input() public formValues: FormGroup;
  fields: IField[];

  ngOnInit() {
    this.getFields(this.section.fields);
  }

  getFields(array: string[]) {
    this.fields = array.map(getConfigFor);
  }

  fieldType(item: any): EFieldType {
    return getFieldType(item);
  }
}
