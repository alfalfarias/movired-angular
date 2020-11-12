import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionComponent } from './transaction.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [TransactionComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
  	TransactionComponent
  ]
})
export class TransactionModule { }
