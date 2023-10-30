import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentTableComponent,
    StudentDialogComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class StudentsModule { }
