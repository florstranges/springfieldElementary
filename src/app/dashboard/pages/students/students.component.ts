import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsService } from './students.service';
import { MatDialog } from '@angular/material/dialog';
import { Student } from './models/students.model';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  students$: Observable<Student[]>;

  constructor(
    private studentsService: StudentsService,
    private matDialog: MatDialog
  ){
    this.students$ = this.studentsService.getStudents$();
  }

  addStudent():void{
    this.matDialog.open(StudentDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if (!!result){
          this.students$ = this.studentsService.createStudent$(result)
        }
      }
    });
  }

  onDeleteStudent(studentId: number): void{
    if (confirm('Esta seguro?')) {
      this.students$ = this.studentsService.deleteStudent$(studentId);
      // this.users = this.users.filter((u) => u.id !== userId);
    }
  }


  onEditStudent(studentId: number): void{
    this.matDialog
    .open(StudentDialogComponent, {
      data: studentId,
    })
    .afterClosed()
    .subscribe({
      next: (result) => {
        if (!!result){
          this.students$ = this.studentsService.editStudent$(studentId, result);
        }
      }
    });
  }
}

