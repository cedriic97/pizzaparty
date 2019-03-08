import {Inject, NgModule} from '@angular/core';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';

import {APP_NAME} from '../config';

const DEFAULT_LANG = 'de';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/localization/', '.json_');
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule
  ]
})
export class LocalizationModule {
  constructor(translate: TranslateService, @Inject(APP_NAME) appName: string) {
    const STORAGE_KEY = `${APP_NAME}-lang`;
    translate.setDefaultLang(DEFAULT_LANG);

    const initialLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    translate.use(initialLang);

    translate.onLangChange.subscribe(
      ({lang}) => localStorage.setItem(STORAGE_KEY, lang)
    );
  }
}
