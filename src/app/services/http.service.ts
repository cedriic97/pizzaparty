import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IField } from '../models/process-config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  configUrl = 'assets/data/cip/config.json';

  
  getConfig(initiative: string): Observable<IField> {
    // now returns an Observable of Config
    return this.http.get<IField>(`assets/data/${initiative}/config.json`);
  }
}
