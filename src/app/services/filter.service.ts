import { Injectable } from '@angular/core';
import { tags } from 'src/assets/data/tags';
import { methods_used } from 'src/assets/data/methods_used';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  public queryTags(query: string): string[] {
    const filterValue = query.toLowerCase();

    return tags.filter(option => option.toLowerCase().includes(filterValue));
  }

  public queryMethodsUsed(query: string): string[] {
    const filterValue = query.toLowerCase();

    return methods_used.filter(option => option.toLowerCase().includes(filterValue));
  }
}
