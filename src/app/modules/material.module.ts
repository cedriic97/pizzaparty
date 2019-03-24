import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatExpansionModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatRadioModule, MatSelectModule, MatStepperModule, MatToolbarModule, MatTooltipModule, MatAutocompleteModule, MatCardModule, MatChipsModule, MatGridListModule, MatButtonToggleModule, MatDatepickerModule } from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatSelectModule,
  MatStepperModule,
  MatToolbarModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatCardModule,
  MatChipsModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatDatepickerModule
];

@NgModule({
  exports: MATERIAL_MODULES,
  imports: MATERIAL_MODULES,
})
export class MaterialModule { }
