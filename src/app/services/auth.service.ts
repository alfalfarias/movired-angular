import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly TOKEN_KEY = 'auth-token';

  constructor() { }
  
  setAuthorizationToken(token: string): void {
    localStorage.setItem(AuthService.TOKEN_KEY, token);
  }
  getAuthorizationToken(): string {
    return localStorage.getItem(AuthService.TOKEN_KEY);
  }
}
