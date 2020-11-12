import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppInitService, appInit } from 'src/app/config/app-init.service';

import { AppComponent } from './app.component';
import { TransactionModule } from './components/transaction/transaction.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MaterialModule } from './shared/material.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  	HttpClientModule,
  	BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule,
    TransactionModule,
  ],
  providers: [
  	AppInitService,
	  { provide: APP_INITIALIZER, useFactory: appInit, multi: true, deps: [AppInitService] },
	  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
