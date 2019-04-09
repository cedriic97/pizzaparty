import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteFeedbackComponent } from '../components/route-feedback/route-feedback.component';
import { PageNotFoundComponent } from '../components/general/error-components/page-not-found/page-not-found.component';
import { RouteStepperComponent } from '../components/route-stepper/route-stepper.component';

export const ROUTE_PATH_ONEIDEAFORM = 'idea-one';
export const ROUTE_PATH_FEEDBACK = 'feedback';

const routes: Routes = [
  { path: '', redirectTo: ROUTE_PATH_ONEIDEAFORM, pathMatch: 'full' },
  { path: ROUTE_PATH_ONEIDEAFORM, component: RouteStepperComponent },
  { path: ROUTE_PATH_FEEDBACK, component: RouteFeedbackComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
