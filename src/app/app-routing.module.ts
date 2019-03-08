import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WizardContainerComponent } from './components/wizard-container/wizard-container.component';

export const ROUTE_PATH_UNIFIEDIDEAFORM = 'idea-one';

const routes: Routes = [
  {path: '', redirectTo: ROUTE_PATH_UNIFIEDIDEAFORM, pathMatch: 'full'},
  {path: ROUTE_PATH_UNIFIEDIDEAFORM, component: WizardContainerComponent},
  {path: '**', component: WizardContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
