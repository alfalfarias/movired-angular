import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules: Array<any> = [
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSelectModule,
    MatToolbarModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
  	...modules
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }]

})
export class MaterialModule { }
