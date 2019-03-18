import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-help-panel',
  templateUrl: './help-panel.component.html',
  styleUrls: ['./help-panel.component.scss']
})
export class HelpPanelComponent implements OnInit {
  @Input() public description: string;
  @Input() public imgpath: string;
  panelOpenState = false;
  constructor() { }

  ngOnInit() {

  }


}
