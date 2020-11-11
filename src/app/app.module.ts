import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppInitService, appInit } from 'src/app/config/app-init.service';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  	HttpClientModule
  ],
  providers: [
  	AppInitService,
	  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
	  { provide: APP_INITIALIZER, useFactory: appInit, multi: true, deps: [AppInitService] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
