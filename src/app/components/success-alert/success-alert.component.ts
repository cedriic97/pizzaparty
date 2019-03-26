import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { selectIdeaForm, selectFormValues } from 'src/app/store/idea-form.selectors';


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

  }
  reload(): void {
    window.location.reload();
}

}
