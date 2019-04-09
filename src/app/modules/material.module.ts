import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatSelectModule,
  MatStepperModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

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
  MatDatepickerModule,
  MatDividerModule
];

@NgModule({
  exports: MATERIAL_MODULES,
  imports: MATERIAL_MODULES,
})
export class MaterialModule { }
