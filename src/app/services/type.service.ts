import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  url = environment.api.url;

  constructor(private http: HttpClient) { }

  getAll({queryParams}: any = {}): Observable<any> {
	const options = { 
		params: new HttpParams({fromObject: queryParams}), 
	};
	return this.http.get(this.url+'/ws_MOV_TRANSACCIONS/serviceTypes/', options);
  }
}
