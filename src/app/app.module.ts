import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import 'hammerjs';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponentNotFoundComponent } from './components/general/component-not-found/component-not-found.component';
import { PageNotFoundComponent } from './components/general/page-not-found/page-not-found.component';
import { LanguageDropdownComponent } from './components/localization/language-dropdown/language-dropdown.component';
import { ControllerComponent } from './components/fields/_controller/_controller.component';
import { ChipComponent } from './components/fields/chip/chip.component';
import { DateComponent } from './components/fields/date/date.component';
import { DropdownComponent } from './components/fields/dropdown/dropdown.component';
import { FreetextComponent } from './components/fields/freetext/freetext.component';
import { HelpPanelComponent } from './components/fields/help-panel/help-panel.component';
import { ImageComponent } from './components/fields/image/image.component';
import { NumberComponent } from './components/fields/number/number.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { StepperContainerComponent } from './components/stepper-container/stepper-container.component';
import { APP_NAME } from './config';
import { LocalizationModule } from './modules/localization.module';
import { HypeService } from './services/hype.service';
import { reducers } from './store';
import { StepperEffects } from './store/stepper.effects';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SelectorComponent } from './components/fields/selector/selector.component';
import { MaterialModule } from './modules/material.module';
import { WelcomeAlertComponent } from './components/welcome-alert/welcome-alert.component';
import { FeedbackFormularComponent } from './components/feedback-formular/feedback-formular.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperContainerComponent,
    LanguageDropdownComponent,
    DropdownComponent,
    ControllerComponent,
    FreetextComponent,
    DateComponent,
    NumberComponent,
    ChipComponent,
    PageNotFoundComponent,
    SuccessAlertComponent,
    ComponentNotFoundComponent,
    FooterComponent,
    HelpPanelComponent,
    ImageComponent,
    SelectorComponent,
    WelcomeAlertComponent,
    FeedbackFormularComponent

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
    NgSelectModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([StepperEffects]),
    MaterialModule,
  ],
  entryComponents: [
    WelcomeAlertComponent
  ],
  providers: [
    { provide: APP_NAME, useValue: 'hype-idea-form' },
    HypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
