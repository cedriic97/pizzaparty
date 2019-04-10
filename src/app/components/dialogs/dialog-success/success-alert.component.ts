import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectFormValues } from 'src/app/store/form/form.selectors';


@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {
    result$;
  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.result$ = this.store.pipe(select(selectFormValues));
    console.log(this.result$)

  }
  reload(): void {
    window.location.reload();
}

}
