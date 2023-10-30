import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import { Student } from '../../models/students.model';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss']
})
export class StudentDialogComponent {
  nameControl = new FormControl('', [Validators.required]);
  lastNameControl = new FormControl('', [Validators.required]);
  courseControl = new FormControl('', [Validators.required]);
  teacherControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required,Validators.email, Validators.minLength(10)]);

  studentForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    course: this.courseControl,
    teacher: this.teacherControl,
    email: this.emailControl
  });

  constructor(
    private matDialogRef: MatDialogRef<StudentDialogComponent>,
    private studentsService: StudentsService,
    @Inject(MAT_DIALOG_DATA) private studentId?: number)
    {
      if(studentId){
        this.studentsService.getStudentById$(studentId).subscribe({
          next: (c) => {
            if (c) {
              this.studentForm.patchValue(c);
            }
          }
        })
      }
    }

    public get isEditing(): boolean{
      return !!this.studentId;
    }

    onSubmit(): void{
      if (this.studentForm.invalid){
        this.studentForm.markAllAsTouched();
      } else{
        this.matDialogRef.close(this.studentForm.value);
      }
    }

}
