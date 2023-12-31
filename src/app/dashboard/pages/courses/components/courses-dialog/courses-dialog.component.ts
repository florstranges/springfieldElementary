import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss']
})
export class CoursesDialogComponent {
  
  courseControl = new FormControl('', [Validators.required]);
  startDateControl = new FormControl(new Date(''), [Validators.required]);
  endDateControl = new FormControl(new Date(''), [Validators.required]);

  courseForm = new FormGroup({
    course: this.courseControl,
    startDate: this.startDateControl,
    endDate: this.endDateControl
  });


  constructor(
    private matDialogRef: MatDialogRef<CoursesDialogComponent>,
    private coursesService: CoursesService,
    @Inject(MAT_DIALOG_DATA) private courseId?: number)
    {
      if(courseId){
        this.coursesService.getCourseById$(courseId).subscribe({
          next: (c) => {
            if (c) {
              this.courseForm.patchValue(c);
            }
          }
        })
      }
    }
  
  public get isEditing(): boolean{
    return !!this.courseId;
  }

  onSubmit(): void{
    if (this.courseForm.invalid){
      this.courseForm.markAllAsTouched();
    } else{
      this.matDialogRef.close(this.courseForm.value);
    }
  }

  
}
