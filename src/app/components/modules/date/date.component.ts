import { Component, OnInit, Input } from '@angular/core';
import { IField } from 'src/app/models/process-config';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  @Input() public field: IField;
  @Input() public forminputs: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
