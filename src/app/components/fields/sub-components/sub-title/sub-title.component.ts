import {Component, Input, OnInit} from '@angular/core';
import {IField} from '../../../../models/stepper';

@Component({
  selector: 'app-field-title',
  templateUrl: './sub-title.component.html',
  styleUrls: ['./sub-title.component.scss']
})
export class SubTitleComponent implements OnInit {
  @Input() public field: IField;
  constructor() { }

  ngOnInit() {
  }

}
