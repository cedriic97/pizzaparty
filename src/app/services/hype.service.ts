import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import { ICurrentUser } from '../models/hype';
import { IHypeTableDepartment, IHypeTableUser } from '../models/hype';
import { Message, sendMessage } from '../models/hype-communication';

@Injectable({
  providedIn: 'root'
})

export class HypeService {

  public readonly userData$: Observable<ICurrentUser>;

  constructor() {
    this.userData$ = this.getPlatformDetails();
  }

  public getPlatformDetails(): Observable<ICurrentUser> {
    const promise = sendMessage(new Message('GET_PLATFORM_DETAILS'), window.top)
      .then(({ payload }) => payload.activeUser);

    return from(promise);
  }

  public queryUser(query: string): Observable<IHypeTableUser[]> {
    query = query.replace(' ', '* ') + '*';

    const promise = sendMessage(new Message('USER_QUERY', { query }), window.top)
      .then(({ payload }) => payload);

    return from(promise);
  }

  public queryDepartments(query: string): Observable<IHypeTableDepartment[]> {
    query = query.replace(' ', '* ') + '*';
    console.log(query);
    const promise = sendMessage(new Message('DEPARTMENT_QUERY', { query }), window.top)
      .then(({ payload }) => payload);

    return from(promise);
  }
}
