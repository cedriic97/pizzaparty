import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MATERIAL_MODULES } from './material';
import { MDC_MODULES } from './mdc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_NAME } from './config';
import { HttpClientModule } from '@angular/common/http';
import { LanguageDropdownComponent } from './components/localization/language-dropdown/language-dropdown.component';
import { LocalizationModule } from './modules/localization.module';
import { HypeService } from './services/hype.service';
import { DropdownComponent } from './components/modules/dropdown/dropdown.component';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';

import { FreetextComponent } from './components/modules/freetext/freetext.component';
import { DateComponent } from './components/modules/date/date.component';
import { WizardContainerComponent } from './components/wizard-container/wizard-container.component';
import { ControllerComponent } from './components/modules/_controller/_controller.component';
import { NumberComponent } from './components/modules/number/number.component';
import { ChipComponent } from './components/modules/chip/chip.component';
import { PageNotFoundComponent } from './components/general/page-not-found/page-not-found.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { ComponentNotFoundComponent } from './components/general/component-not-found/component-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    WizardContainerComponent,
    LanguageDropdownComponent,
    DropdownComponent,
    ControllerComponent,
    FreetextComponent,
    DateComponent,
    NumberComponent,
    ChipComponent,
    PageNotFoundComponent,
    SuccessAlertComponent,
    ComponentNotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LocalizationModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,

    ...MATERIAL_MODULES,
    ...MDC_MODULES
  ],
  providers: [
    { provide: APP_NAME, useValue: 'hype-idea-form' },
    HypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
