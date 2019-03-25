import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StepperContainerComponent} from '../components/stepper-container/stepper-container.component';
import {PageNotFoundComponent} from '../components/general/page-not-found/page-not-found.component';
import {SuccessAlertComponent} from '../components/success-alert/success-alert.component';

export const ROUTE_PATH_UNIFIEDIDEAFORM = 'idea-one';
export const ROUTE_PATH_SUCCESS = 'success';

const routes: Routes = [
  {path: '', redirectTo: ROUTE_PATH_UNIFIEDIDEAFORM, pathMatch: 'full'},
  {path: ROUTE_PATH_UNIFIEDIDEAFORM, component: StepperContainerComponent},
  {path: ROUTE_PATH_SUCCESS, component: SuccessAlertComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
