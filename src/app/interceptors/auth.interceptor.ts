import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token: string = this.authService.getAuthorizationToken();

    const authReq = req.clone({ 
      setHeaders: { 
        Authorization: token,
        'Content-Type': 'application/json',
        merchantId: '095115',
        postId: '10001',
      } 
    });

    return next.handle(authReq);
  }
}