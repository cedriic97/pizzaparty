import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-not-found',
  templateUrl: './component-not-found.component.html',
  styleUrls: ['./component-not-found.component.scss']
})
export class ComponentNotFoundComponent implements OnInit {
  @Input() public componentName: string;
  constructor() { }

  ngOnInit() {
  }

}
