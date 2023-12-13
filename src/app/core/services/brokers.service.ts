import { environment } from './../../../environments/environment.development';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Brokers } from '../models/brokers';
import { Insurer } from '../models/insurer';

@Injectable({
  providedIn: 'root'
})
export class BrokersService {
Url = environment.apiUrl
private readonly http = inject(HttpClient);
  // constructor(private http: HttpClient) {

  //  }
   getBrokers(): Observable<Brokers[]> {
    return this.http.get<Brokers[]>(`${this.Url}/broker`);
  }
  getAssureurs():Observable<Insurer[]>{
    return this.http.get<Insurer[]>(`${this.Url}/insurer`);
  }

}
