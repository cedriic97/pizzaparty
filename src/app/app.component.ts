import { Component, ViewChild } from '@angular/core';
import { IField } from './models/process-config';
import { MatStepper, MatHorizontalStepper, MatStepperNext } from '@angular/material';
import { WizardContainerComponent } from './components/wizard-container/wizard-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hype-idea-form';
  @ViewChild(WizardContainerComponent) private child: WizardContainerComponent;
  @ViewChild(MatStepper) private next: MatStepper;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }


}
