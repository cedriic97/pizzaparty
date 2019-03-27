import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedbackFormularComponent } from '../components/feedback-formular/feedback-formular.component';
import { PageNotFoundComponent } from '../components/general/page-not-found/page-not-found.component';
import { StepperContainerComponent } from '../components/stepper-container/stepper-container.component';

export const ROUTE_PATH_UNIFIEDIDEAFORM = 'idea-one';
export const ROUTE_PATH_FEEDBACK = 'feedback';

const routes: Routes = [
  {path: '', redirectTo: ROUTE_PATH_UNIFIEDIDEAFORM, pathMatch: 'full'},
  {path: ROUTE_PATH_UNIFIEDIDEAFORM, component: StepperContainerComponent},
  {path: ROUTE_PATH_FEEDBACK, component: FeedbackFormularComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
