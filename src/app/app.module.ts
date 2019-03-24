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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponentNotFoundComponent } from './components/general/component-not-found/component-not-found.component';
import { PageNotFoundComponent } from './components/general/page-not-found/page-not-found.component';
import { LanguageDropdownComponent } from './components/localization/language-dropdown/language-dropdown.component';
import { ControllerComponent } from './components/modules/_controller/_controller.component';
import { ChipComponent } from './components/modules/chip/chip.component';
import { DateComponent } from './components/modules/date/date.component';
import { DropdownComponent } from './components/modules/dropdown/dropdown.component';
import { FreetextComponent } from './components/modules/freetext/freetext.component';
import { HelpPanelComponent } from './components/modules/help-panel/help-panel.component';
import { ImageComponent } from './components/modules/image/image.component';
import { NumberComponent } from './components/modules/number/number.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { WizardContainerComponent } from './components/wizard-container/wizard-container.component';
import { APP_NAME } from './config';
import { LocalizationModule } from './modules/localization.module';
import { HypeService } from './services/hype.service';
import { reducers } from './store';
import { WizardEffects } from './store/stepper.effects';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SelectorComponent } from './components/modules/selector/selector.component';
import { MaterialModule } from './modules/material.module';

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
    ComponentNotFoundComponent,
    FooterComponent,
    HelpPanelComponent,
    ImageComponent,
    SelectorComponent

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
    EffectsModule.forRoot([WizardEffects]),
    MaterialModule,
  ],
  providers: [
    { provide: APP_NAME, useValue: 'hype-idea-form' },
    HypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
