import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() public stepper: MatStepper;
  @Output() success = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }


  goBack() {
    this.stepper.previous();
  }

  goForward() {
    this.stepper.next();
  }

  fireSuccess() {
    this.success.emit('successEvent')
  }

}
