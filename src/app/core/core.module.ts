import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-AR' }],
})
export class CoreModule {}
