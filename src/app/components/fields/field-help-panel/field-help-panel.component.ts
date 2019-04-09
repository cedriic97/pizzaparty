import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-help-panel',
  templateUrl: './field-help-panel.component.html',
  styleUrls: ['./field-help-panel.component.scss']
})
export class FieldHelpPanelComponent implements OnInit {
  @Input() public description: string;
  @Input() public imgpath: string;
  panelOpenState = false;
  constructor() { }

  ngOnInit() {

  }


}
