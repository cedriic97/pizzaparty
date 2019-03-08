import { Component, OnInit, Input } from '@angular/core';
import { IField } from 'src/app/models/process-config';

@Component({
  selector: 'app-freetext',
  templateUrl: './freetext.component.html',
  styleUrls: ['./freetext.component.scss']
})
export class FreetextComponent implements OnInit {
  @Input() public field: IField;
  constructor() { }

  ngOnInit() {
  }

}
