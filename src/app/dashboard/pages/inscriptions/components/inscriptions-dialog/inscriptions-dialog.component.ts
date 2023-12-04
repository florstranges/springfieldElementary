import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { InscriptionsActions } from '../../store/inscriptions.actions';
import { selectCourseOptions, selectStudentsOptions } from '../../store/inscriptions.selectors';
import { Observable, of, take } from 'rxjs';
import { Student } from '../../../students/models/students.model';
import { Course } from '../../../courses/models/courses.models';
import { FormControl, FormGroup } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inscriptions-dialog',
  templateUrl: './inscriptions-dialog.component.html',
  styleUrls: ['./inscriptions-dialog.component.scss']
})
export class InscriptionsDialogComponent {

  courseControl = new FormControl<number | null>(null);
  studentControl = new FormControl<number | null>(null);

  inscriptionForm = new FormGroup({
    "courseId": this.courseControl,
    "studentId": this.studentControl
  })

  courseOptions$: Observable<Course[]>;
  studentOptions$: Observable<Student[]>;

  constructor(private store: Store, private actions$: Actions, private matDialogRef: MatDialogRef<InscriptionsDialogComponent>){
    this.store.dispatch(InscriptionsActions.loadInscriptionsDialogOptions());

    this.courseOptions$ = this.store.select(selectCourseOptions)
    this.studentOptions$ = this.store.select(selectStudentsOptions)

    this.actions$.pipe(ofType(InscriptionsActions.loadInscriptions), take(1)).subscribe({
      next: () => this.matDialogRef.close(),
    })
  }

  onSubmit(): void {
    this.store.dispatch(InscriptionsActions.createInscription({payload: this.inscriptionForm.getRawValue()}));
  }

}
