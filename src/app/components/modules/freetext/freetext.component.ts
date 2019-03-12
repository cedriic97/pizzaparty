import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IField } from 'src/app/models/process-config';
import { FormControl, FormGroup } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
  selector: 'app-freetext',
  templateUrl: './freetext.component.html',
  styleUrls: ['./freetext.component.scss']
})
export class FreetextComponent implements OnInit {
  @Input() public field: IField;
  @Input() public forminputs: FormGroup;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;


  constructor() { }

  ngOnInit() {
  }

}
