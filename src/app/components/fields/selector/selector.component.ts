import { HttpClient } from '@angular/common/http';
import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import { TranslateParser, TranslateService } from '@ngx-translate/core';
import { EQueryable, IField } from 'src/app/models/wizard';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectorComponent),
      multi: true
    }
  ]
})
export class SelectorComponent implements OnInit, ControlValueAccessor {
  @Input() public field: IField;
  @Input() public forminputs: FormGroup;

  englishLanguage;

  chips = [];

  selectedChips: any[] = [];
  private onChange: any;
  constructor(private http: HttpClient, private translate: TranslateService, public translateParser: TranslateParser) { }

  ngOnInit(): void {
    this.loadStaticData();
    this.getTranslationInTargetLanguage('en').subscribe(v => this.englishLanguage = v)
  }

  loadStaticData() {

    switch (this.field.connection) {
      // TODO: fix errors
      // case EQueryable.METHODS_USED:
      //   this.http.get('/assets/data/data.json')
      //     .subscribe(v => this.chips = v.methods)
      //   break;
      // case EQueryable.TYPES_OF_WASTE:
      //   this.http.get('/assets/data/data.json')
      //     .subscribe(v => this.chips = v.typesOfWaste);
      //   break;

      default:
        break;
    }


  }
  add(event: MatChipInputEvent): void {

  }

  remove(chip: any): void {

  }

  isSelected(chip: any): boolean {
    const index = this.selectedChips.indexOf(this.englishLanguage[chip.name]);
    return index >= 0;
  }


  selectChip(chip: any): void {
    const index = this.selectedChips.indexOf(this.englishLanguage[chip.name]);

    if (index >= 0) {
      this.selectedChips.splice(index, 1);
    } else {
      this.selectedChips.push(this.englishLanguage[chip.name]);

    }
  }
  getTranslationInTargetLanguage(language: string) {
    return this.translate.getTranslation(language);



  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    console.log(obj);
  }
}

