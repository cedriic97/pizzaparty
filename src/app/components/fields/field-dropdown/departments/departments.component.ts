import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  @Input() public options: any;
  constructor() { }

  ngOnInit() {
    console.log(this.options)
  }

}
