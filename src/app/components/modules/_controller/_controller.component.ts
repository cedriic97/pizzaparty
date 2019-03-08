import { Component, OnInit, Input } from '@angular/core';
import { IField, EFieldType, getFieldType, getConfigFor } from 'src/app/models/process-config';

@Component({
  selector: 'app-controller',
  templateUrl: './_controller.component.html',
  styleUrls: ['./_controller.component.scss']
})
export class ControllerComponent implements OnInit {
  @Input() public field: string[];
  fields: IField[];

  constructor() { }

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
