import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { FullnamePipe } from './pipes/fullname.pipe';
import {MatTableModule} from '@angular/material/table';
import { FormErrorPipe } from './pipes/form-error.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    FullnamePipe,
    FormErrorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FullnamePipe,
    MatTableModule,
    FormErrorPipe,
    MatDatepickerModule,
    MatTableModule,
    MatChipsModule,
    MatSelectModule
  ]
})
export class SharedModule { }
