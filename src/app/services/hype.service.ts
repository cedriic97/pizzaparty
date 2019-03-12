import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { sendMessage, Message } from '../models/messaging';
import { HypeTable } from '../models/hype';

@Injectable({
  providedIn: 'root'
})

export class HypeService {
  constructor() { }

  public queryUser(query: string): Observable<HypeTable> {
    query = query.replace(' ', '* ') + '*';

    const promise = sendMessage(new Message('USER_QUERY', { query }), window.opener)
      .then(({payload}) => payload);

    return from(promise);
  }

  public queryDepartments(query: string): Observable<HypeTable> {
    query = query.replace(' ', '* ') + '*';
    console.log(query);
    const promise = sendMessage(new Message('DEPARTMENT_QUERY', {query}), window.opener)
      .then(({payload}) => payload);

    return from(promise);
  }

  



}
