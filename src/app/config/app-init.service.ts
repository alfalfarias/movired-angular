import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(private authService: AuthService) { }

  load() :Promise<any> {
  	const promise = new Promise((resolve, reject) => {
      const token: string = environment.api.key;
      this.authService.setAuthorizationToken(token);
      
	    resolve(true);
	  });

	  return promise;
  }
}

export function appInit(appInitService: AppInitService) {
  return () => appInitService.load();
}