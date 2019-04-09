import 'hammerjs';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FileUploadModule } from 'ng2-file-upload';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AppComponent } from './app.component';
import { FieldAttachmentsComponent } from './components/fields/field-attachments/field-attachments.component';
import { RouteFeedbackComponent } from './components/route-feedback/route-feedback.component';
import { ControllerComponent } from './components/fields/controller/controller.component';
import { DepartmentsComponent } from './components/fields/field-dropdown/departments/departments.component';
import { FieldDropdownComponent } from './components/fields/field-dropdown/field-dropdown.component';
import { TagsComponent } from './components/fields/field-dropdown/tags/tags.component';
import { UsersComponent } from './components/fields/field-dropdown/users/users.component';
import { FieldTextComponent } from './components/fields/field-text/field-text.component';
import { FieldHelpPanelComponent } from './components/fields/field-help-panel/field-help-panel.component';
import { ImageCropperDialogComponent } from './components/dialogs/dialog-image-cropper/image-cropper-dialog.component';
import { FieldImageComponent } from './components/fields/field-image/field-image.component';
import { FieldNumberComponent } from './components/fields/field-number/field-number.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { ComponentNotFoundComponent } from './components/general/error-components/component-not-found/component-not-found.component';
import { PageNotFoundComponent } from './components/general/error-components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/general/header/header.component';
import { LanguageDropdownComponent } from './components/localization/language-dropdown/language-dropdown.component';
import { RouteStepperComponent } from './components/route-stepper/route-stepper.component';
import { SuccessAlertComponent } from './components/dialogs/dialog-success/success-alert.component';
import { WelcomeAlertComponent } from './components/dialogs/dialog-welcome/welcome-alert.component';
import { APP_NAME } from './config';
import { AppRoutingModule } from './modules/app-routing.module';
import { LocalizationModule } from './modules/localization.module';
import { MaterialModule } from './modules/material.module';
import { HypeService } from './services/hype.service';
import { reducers } from './store';
import { StepperEffects } from './store/stepper/stepper.effects';
import { SubTitleComponent } from './components/fields/sub-components/sub-title/sub-title.component';
import {FieldChipSelectorComponent} from './components/fields/field-chip-selector/field-chip-selector.component';
import {FieldDatepickerComponent} from './components/fields/field-datepicker/field-datepicker.component';


@NgModule({
  declarations: [
    AppComponent,
    RouteStepperComponent,
    LanguageDropdownComponent,
    FieldDropdownComponent,
    ControllerComponent,
    FieldTextComponent,
    FieldDatepickerComponent,
    FieldNumberComponent,
    PageNotFoundComponent,
    SuccessAlertComponent,
    ComponentNotFoundComponent,
    FooterComponent,
    FieldHelpPanelComponent,
    FieldImageComponent,
    FieldChipSelectorComponent,
    WelcomeAlertComponent,
    RouteFeedbackComponent,
    UsersComponent,
    DepartmentsComponent,
    TagsComponent,
    HeaderComponent,
    ImageCropperDialogComponent,
    FieldAttachmentsComponent,
    SubTitleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LocalizationModule,
    MatNativeDateModule,
    HttpClientModule,
    ImageCropperModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([StepperEffects]),
    MaterialModule,
    FileUploadModule
  ],
  entryComponents: [
    WelcomeAlertComponent,
    SuccessAlertComponent,
    ImageCropperDialogComponent
  ],
  providers: [
    { provide: APP_NAME, useValue: 'hype-idea-form' },
    HypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
