import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url = environment.api.url;

  constructor(private http: HttpClient) { }

  getAll({data}: any = {}): Observable<any> {
	return this.http.post<any>(this.url+'/ws_MOV_TRANSACCIONS/transactions', data);
  }
}
