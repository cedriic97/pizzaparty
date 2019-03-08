import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {AVAILABLE_LANGUAGES, LanguageDetail} from '../../../models/localization';

@Component({
  selector: 'app-language-dropdown',
  templateUrl: './language-dropdown.component.html',
  styleUrls: ['./language-dropdown.component.scss']
})
export class LanguageDropdownComponent implements OnInit {
  activeLanguage$: Observable<LanguageDetail>;
  selectableLanguages$: Observable<LanguageDetail[]>;

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
    this.activeLanguage$ = this.translate.onLangChange.pipe(
      map(lang => AVAILABLE_LANGUAGES.find(l => l.code === lang.lang)),
    );

    this.selectableLanguages$ = this.activeLanguage$.pipe(
      map(lang => AVAILABLE_LANGUAGES.filter(l => l.code !== lang.code)),
    );
  }

  select(lang: LanguageDetail) {
    this.translate.use(lang.code);
  }
}
