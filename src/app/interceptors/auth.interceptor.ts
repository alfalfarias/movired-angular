import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpEvent, } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token: string = this.authService.getAuthorizationToken();
    
    const authReq = req.clone({ 
      setHeaders: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
        merchantId: '095115',
        posId: '10001',
      }
    });

    return next.handle(authReq);
  }
}