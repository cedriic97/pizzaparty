import { Component, OnInit, Input } from '@angular/core';
import { IField } from 'src/app/models/stepper';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})

export class NumberComponent implements OnInit {
  @Input() public field: IField;
  @Input() public forminputs: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
