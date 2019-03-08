import { Component, OnInit } from '@angular/core';
import { IConfig } from 'src/app/models/process-config';
import { HypeService } from 'src/app/services/hype.service';


@Component({
  selector: 'app-wizard-container',
  templateUrl: './wizard-container.component.html',
  styleUrls: ['./wizard-container.component.scss'],
})

export class WizardContainerComponent implements OnInit {
  response: any;

  field: IConfig = JSON.parse(`
  {
    "initiative": "Die Echte Initiative",
    "title": "Torstens Echte",
    "type": "KVP",
    "process": {
      "section1":
        [
          "author",
          "author",
          "department",
          "champion",
          "author"
        ],
      "section2":
        [
          "department",
          "champion"
        ],
      "section3":
        [
          "title",
          "author"
        ]
    }
  }
  `)

  request(searchval: string): void {
    if (window.opener) {
      this.hype.queryUser(searchval).subscribe(result =>
        this.response = JSON.stringify(result)
      );
    }
  }

  constructor(public hype: HypeService) { }

  ngOnInit() {
    //import('../../../assets/data/')
      //.then(file => console.log(file));
  }
}
