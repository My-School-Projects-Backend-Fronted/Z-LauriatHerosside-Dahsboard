import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Brokers } from '../models/brokers';
@Injectable({
  providedIn: 'root'
})
export class BrokersService {
url = "http://localhost:3000/broker"
  constructor(private http: HttpClient) {

   }
   getDbData(): Observable<Brokers[]> {
    return this.http.get<Brokers[]>(this.url);
  }

}
